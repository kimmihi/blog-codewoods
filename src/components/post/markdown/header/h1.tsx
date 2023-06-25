import type { ReactNode } from "react";

import styled from "styled-components";

interface Props {
  children: ReactNode;
}

const Container = styled.h1`
  margin-bottom: 3rem;
  font-size: clamp(1.75rem, 1.39rem + 1.79vw, 2.6rem);
`;

const H1 = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default H1;
