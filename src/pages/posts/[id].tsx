import type { GetStaticPropsContext } from "next";
import styled from "styled-components";

import fs from "fs";
import matter from "gray-matter";
import gfm from "remark-gfm";
import slug from "remark-slug";
import ReactMarkdown from "react-markdown";

interface BlogPostProps {
  post: string;
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <Container>
      <ReactMarkdown remarkPlugins={[gfm, slug]}>
        {matter(post).content}
      </ReactMarkdown>
    </Container>
  );
}

const Container = styled.div`
  padding: 32px;
  margin: 0px 25%;
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
