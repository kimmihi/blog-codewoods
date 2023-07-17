import type { PostMatter } from "@/types/blog";

import Link from "next/link";
import Image from "next/image";

import styled from "styled-components";

interface PreviewCardProps {
  postMatter: PostMatter;
}

const Card = styled.article`
  position: relative;
  max-width: 37rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 16px;
  padding: 1.25rem;
  background-color: #fff;
  border: 1px solid #e6e6e6;
  word-break: break-word;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background-color: rgb(250, 250, 250);
  }
`;

const ImageBox = styled.a`
  position: relative;
  z-index: 1;
  width: 100%;
  min-height: 200px;
`;

const Title = styled.h2`
  color: #262626;
`;
const Summary = styled.p`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: clamp(1.25rem, 1rem + 1.5vw, 1.8rem);
  font-size: clamp(0.75rem, 1.5vw, 1rem);
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  color: #262626;
`;

const Date = styled.p`
  color: #8c8c8c;
  margin-top: 5rem;
  margin-block-start: 1rem;
  font-size: clamp(0.8rem, 1.5vw, 1rem);
`;

const Wrapper = styled.div`
  flex: auto;
  overflow-wrap: break-word;
  margin-top: clamp(1.375rem, 1.2rem + 0.89vw, 2rem);
`;

export default function PreviewCard({ postMatter }: PreviewCardProps) {
  return (
    <Card>
      <ImageBox>
        {postMatter.thumb_nail && (
          <Image
            src={postMatter.thumb_nail}
            alt={postMatter.title}
            fill={true}
            style={{
              objectFit: "contain",
              borderRadius: "6px",
            }}
          />
        )}
      </ImageBox>
      <Link
        href={`/posts/${postMatter.id}`}
        style={{ textDecoration: "none", display: "grid" }}
      >
        <Wrapper>
          <Date>{postMatter.date}</Date>
          <Title>{postMatter.title}</Title>
          <Summary>{postMatter.summary}</Summary>
        </Wrapper>
      </Link>
    </Card>
  );
}
