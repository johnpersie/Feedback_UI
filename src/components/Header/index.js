import React from "react";
import { Container, Wrapper } from "./headerStyled";

function Header() {
  return (
    <Container
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        color: "hsl(150,90%, 72%)",
      }}
    >
      <Wrapper>
        <h2>Feedback UI</h2>
      </Wrapper>
    </Container>
  );
}

export default Header;
