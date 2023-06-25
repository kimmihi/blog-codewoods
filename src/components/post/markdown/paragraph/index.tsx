import type { ReactNode } from "react";

import styled from "styled-components";

interface Props {
  children: ReactNode;
}

export default function Paragraph({ children }: Props) {
  return <Container>{children}</Container>;
}

const Container = styled.p`
  display: block;
  line-height: 1.75rem;
  margin-top: 1rem;
  font-size: clamp(1rem, 0.96rem + 0.18vw, 1.125rem);
`;
