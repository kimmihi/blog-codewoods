import type { ReactNode } from "react";
import styled from "styled-components";

import theme from "@/styles/theme";

interface Props {
  children: ReactNode;
}

export default function BlockquoteBlock({ children }: Props) {
  return <Container>{children}</Container>;
}

const Container = styled.blockquote`
  padding: 16px;
  margin: 0 auto;
  border-radius: 12px;
  background-color: ${theme.colors.main};
`;
