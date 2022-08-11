import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #070b0d;
  color: #b3afac;
  border-radius: 1.5rem;
  padding: 4rem 5rem;
  margin: 2rem 0;
  position: relative;
  width: 90%;
  margin: 3rem auto;

  @media screen and (max-width: 600px) {
    width: 96%;
    padding: 2rem 1.5rem;
  }
`;

function Card({ children }) {
  return <Container>{children}</Container>;
}

export default Card;
