import type { GetStaticPropsContext } from "next";
import styled from "styled-components";

import fs from "fs";
import matter from "gray-matter";
import gfm from "remark-gfm";
import slug from "remark-slug";
import ReactMarkdown from "react-markdown";

import H1 from "@/components/post/markdown/header/h1";
import H2 from "@/components/post/markdown/header/h2";
import H3 from "@/components/post/markdown/header/h3";
import Img from "@/components/post/markdown/img";
import LiBlock from "@/components/post/markdown/li-block";
import CodeBlock from "@/components/post/markdown/code-block";
import Paragraph from "@/components/post/markdown/paragraph";
import BlockquoteBlock from "@/components/post/markdown/blockquote-block";

interface BlogPostProps {
  post: string;
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <Container>
      <ReactMarkdown
        remarkPlugins={[gfm, slug]}
        components={{
          h1: H1,
          h2: H2,
          h3: H3,
          img: Img,
          li: LiBlock,
          p: Paragraph,
          code: CodeBlock,
          blockquote: BlockquoteBlock,
        }}
      >
        {matter(post).content}
      </ReactMarkdown>
    </Container>
  );
}

const Container = styled.article`
  display: flow-root;
  position: relative;
  flex-grow: 999;
  flex-basis: 0;

  margin-inline: auto;
  padding-inline: clamp(1.275rem, 1.2rem + 0.89vw, 2rem);
  @media screen and (min-width: 775px) {
    width: clamp(14rem, 95vw, 85rem);
    max-width: min(50rem, 100%);
  }
`;

export async function getStaticProps(context: GetStaticPropsContext) {
  try {
    const post = fs
      .readFileSync(`public/blog/posts/${context.params?.id}.md`)
      .toString();

    return {
      props: { post },
    };
  } catch (err) {
    console.error(err);
    return {
      props: {},
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  try {
    const posts = fs
      .readdirSync("public/blog/posts/")
      .map((file) => file.split(".")[0]);

    const paths = posts
      .filter((file) => file.match(/\.md$/))
      .map((post) => ({
        params: {
          id: post,
        },
      }));

    return { paths, fallback: "blocking" };
  } catch (err) {
    console.error(err);
  }
}
