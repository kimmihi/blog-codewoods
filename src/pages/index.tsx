import type { PostMatter } from "@/types/blog";

import Link from "next/link";
import { useState, useEffect } from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import matter from "gray-matter";

import PreviewCard from "@/components/post/preview-card";

import { getBlogPosts } from "@/apis/post";
import { BreakPoints } from "@/styles/constant";

interface HomeProps {
  posts: string[];
}

const GridContainer = styled.div`
  position: relative;
  display: grid;
  grid-gap: clamp(1.375rem, 1.2rem + 0.89vw, 2rem);
  margin-top: 32px;
  margin-inline: auto;
  padding-inline: clamp(0, 1.2rem + 0.89vw, 2rem);
  grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
`;

export default function Home({ posts }: HomeProps) {
  const [postMatters, setPostMatters] = useState<PostMatter[][]>([[]]);
  const [postList, setPostList] = useState<PostMatter[]>([]);

  useEffect(() => {
    const post_matters = posts.map((post) => {
      const data = matter(post).data;
      return {
        ...data,
        date: dayjs(data.date).format("YYYY-MM-DD"),
      } as PostMatter;
    });

    setPostList(post_matters);
  }, [posts]);
  return (
    <GridContainer>
      {postList.map((post) => (
        <Link
          key={post.id}
          href={`/posts/${post.id}`}
          style={{ textDecoration: "none", display: "grid" }}
        >
          <PreviewCard postMatter={post} />
        </Link>
      ))}
    </GridContainer>
  );
}

export async function getStaticProps() {
  try {
    const posts = getBlogPosts();

    return {
      props: { posts },
    };
  } catch (err) {
    console.error(err);
    return {
      props: {},
      notFound: true,
    };
  }
}
