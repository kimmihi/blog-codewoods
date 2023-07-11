FROM node:16-alpine as builder

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
COPY .pnp.cjs ./
COPY .pnp.loader.mjs ./
COPY .yarnrc.yml ./
COPY .yarn .yarn
RUN yarn install --immutable

COPY . .

ARG GITHUB_SHA=0
RUN yarn build

FROM node:16-alpine AS runner

WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=builder /app/public ./public

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

CMD ["node", "-r", "./.pnp.cjs", "server.js"]


