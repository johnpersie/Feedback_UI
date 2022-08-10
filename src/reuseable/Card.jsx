import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #fff;
  color: #333;
  border-radius: 15px;
  padding: 40px 50px;
  margin: 20px 0;
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
