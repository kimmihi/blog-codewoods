import styled from "styled-components";

import { HEADER_HEIGHT, BreakPoints } from "@/styles/constant";

interface MainProps {
  children: React.ReactNode;
}

const Container = styled.main`
  margin-top: ${HEADER_HEIGHT}px;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: clamp(1.75rem, 2.75rem + 2.5vw, 6.25rem);
  padding-right: clamp(1.75rem, 2.75rem + 2.5vw, 6.25rem);
`;

export default function Main({ children }: MainProps) {
  return <Container>{children}</Container>;
}
