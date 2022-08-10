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
  width: 50%;
  margin: 6rem auto;
`;
