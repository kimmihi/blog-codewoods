import type { ReactNode } from "react";

import styled from "styled-components";

interface Props {
  children: ReactNode;
}

const Container = styled.h2`
  margin-top: 3.5rem;
  font-size: clamp(1.5rem, 1.29rem + 1.07vw, 2rem);
`;

const H2 = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default H2;
