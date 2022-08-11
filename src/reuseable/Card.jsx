import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #fff;
  color: #333;
  border-radius: 1.5rem;
  padding: 4rem 5rem;
  margin: 2rem 0;
  position: relative;
`;

function Card({ children, reverse }) {
  return (
    <Container
      style={{
        backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "#fff",
        color: reverse ? "#fff" : "#000",
      }}
    >
      {children}
    </Container>
  );
}

export default Card;
