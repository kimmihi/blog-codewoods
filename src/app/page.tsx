"use client";
import styled from "styled-components";

import PreviewCard from "@/components/post/preview-card";

import { BreakPoints } from "@/styles/constant";

const GridContainer = styled.div`
  display: grid;
  justify-items: center;
  grid-gap: clamp(1.375rem, 1.2rem + 0.89vw, 2rem);
  margin-top: 64px;
  grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
  /* @media screen and (max-width: ${BreakPoints.xl}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: ${BreakPoints.sm}px) {
    grid-template-columns: repeat(1, 1fr);
  } */
`;

const summary =
  "프로그래밍 언어를 공부할 때 그 언어가 어떻게 실행되고, 어디에 주로 쓰이는지 등과 같은 특성을 아는 것은 언어를 깊이 이해하는 데에 도움이 된다고 생각한다. 그래서 이번에 자바스크립트의 런타임 환경에 대해 정리를 하였다. 자바스크립트는 크롬, 엣지, 사파리와 같은 웹 브라우저에서 실행되는데 각각의 웹 브라우저에는 자바스크립트를 실행시키기 위한 엔진이 존재한다. 그 중에서 크롬의 자바스크립트 엔진인 V8을 기준으로 정리하려고 한다. 왜냐하면 크롬이라는 웹 브라";
export default function Home() {
  return (
    <GridContainer>
      <PreviewCard
        postMatter={{
          id: "hello",
          title: "Responsive Design",
          summary,
          date: "2023-05-11",
        }}
      />
      <PreviewCard
        postMatter={{
          id: "hello",
          title: "Responsive Design",
          summary,
          date: "2023-05-11",
        }}
      />
      <PreviewCard
        postMatter={{
          id: "hello",
          title: "Responsive Design",
          summary,
          date: "2023-05-11",
        }}
      />
    </GridContainer>
  );
}
