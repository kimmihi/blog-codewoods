import type { PostMatter } from "@/types/blog";

import Image from "next/image";

import styled from "styled-components";

interface PreviewCardProps {
  postMatter: PostMatter;
}

const Card = styled.div`
  position: relative;
  height: 500px;
  border-radius: 16px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #e6e6e6;
  cursor: pointer;
`;

const NoImage = styled.div`
  width: 100%;
  height: 60%;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  background-color: #cccccc;
`;

const PostMatterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 0px 16px;
`;
const Title = styled.h2``;
const Summary = styled.p`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: clamp(1.25rem, 1rem + 1.5vw, 1.8rem);
  font-size: clamp(0.75rem, 1.5vw, 1rem);
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
`;

const Date = styled.p`
  color: #8c8c8c;
  font-size: clamp(0.8rem, 1.5vw, 1rem);
`;

const Wrapper = styled.div``;

export default function PreviewCard({ postMatter }: PreviewCardProps) {
  return (
    <Card>
      <NoImage />
      <PostMatterContainer>
        <Wrapper>
          <Title>{postMatter.title}</Title>
          <Summary>{postMatter.summary}</Summary>
        </Wrapper>

        <Date>{postMatter.date}</Date>
      </PostMatterContainer>
    </Card>
  );
}
