import Image from "next/image";
import styled from "styled-components";

export default function Img(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <Container>
      <Image
        src={props.src || ""}
        alt={props.alt || ""}
        fill
        objectFit="contain"
        objectPosition="center"
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 300px;
`;
