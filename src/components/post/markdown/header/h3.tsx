import type { ReactNode } from "react";

import styled from "styled-components";

interface Props {
  children: ReactNode;
}

const Container = styled.h3`
  font-size: clamp(1.25rem, 1.25rem + 0.5vw, 1.75rem);
`;

const H3 = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default H3;
