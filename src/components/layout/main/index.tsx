import styled from "styled-components";

import { HEADER_HEIGHT, BreakPoints } from "@/styles/constant";

interface MainProps {
  children: React.ReactNode;
}

const Container = styled.main`
  width: clamp(16rem, 95vw, 85rem);
  margin-inline: auto;
  margin-top: ${HEADER_HEIGHT}px;
  padding-inline: clamp(1.25rem, 1.2rem + 0.89vw, 2rem);
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
`;

export default function Main({ children }: MainProps) {
  return <Container>{children}</Container>;
}
