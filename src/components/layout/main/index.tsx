import styled from "styled-components";

import { HEADER_HEIGHT, BreakPoints } from "@/styles/constant";

interface MainProps {
  children: React.ReactNode;
}

const Container = styled.main`
  width: 100%;
  margin: ${HEADER_HEIGHT}px 128px 0px 128px;
  padding: 24px 48px;

  @media screen and (max-width: ${BreakPoints.md}px) {
    margin: ${HEADER_HEIGHT}px 32px 0px 32px;
    padding: 6px 12px;
  }
`;

export default function Main({ children }: MainProps) {
  return <Container>{children}</Container>;
}
