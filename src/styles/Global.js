import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
    font-size: 62.5%;
    scroll-behavior: smooth;
}

body {
  background-color: #999;
  font-family: 'Poppins', sans-serif;
  line-height: 1.6;
font-size: 1.6rem;
}

ul {
  list-style: none;
}
`;
export const Container = styled.div`
  max-width: 120rem;
  width: 70%;
  margin: auto;

  @media screen and (max-width: 960px) {
    width: 90%;
  }
`;
export const Wrapper = styled.div`
  max-width: 120rem;
  width: 60%;
  margin: 6rem auto;

  @media screen and (max-width: 960px) {
    width: 80%;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
