# Install dependencies only when needed
FROM node:18-alpine
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY .yarn ./.yarn
COPY .pnp.cjs .yarnrc.yml package.json yarn.lock* ./
RUN yarn set version berry
RUN yarn install --immutable

COPY . .

RUN yarn build

EXPOSE 3000


CMD ["yarn","start"]