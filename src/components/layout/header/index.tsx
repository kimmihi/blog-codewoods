import styled from "styled-components";

import Link from "next/link";

import { HEADER_HEIGHT } from "@/styles/constant";

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 7px #e6e6e6;
  background-color: #fff;
  z-index: 999;
`;

const Title = styled.h1`
  font-size: 42px;
  font-weight: 900;
  color: ${(props) => props.theme.colors.main};
`;

const Header = () => {
  return (
    <Container>
      <Link href="/" style={{ textDecoration: "none" }}>
        <Title>codewoods</Title>
      </Link>
    </Container>
  );
};

export default Header;
