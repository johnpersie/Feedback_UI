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
  background-image: url("../frontend.jpg");
  background: #070b0d;
  font-family: 'Poppins', sans-serif;
  line-height: 1.6;
  font-size: 1.6rem;
  background-attachment: fixed;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  overflow: auto;
  width: 100vw;
}

ul {
  list-style: none;
}
`;
export const Container = styled.div`
  max-width: 120rem;
  width: 50%;
  margin: 6rem auto;
  background-color: #151a1e;
  border-radius: 2rem;
  padding: 2rem 2rem;

  @media screen and (max-width: 960px) {
    width: 90%;
  }
  @media screen and (max-width: 450px) {
    width: 96%;
    padding: 0;
  }
`;
// export const Wrapper = styled.div`
//   max-width: 120rem;
//   width: 70%;
//   margin: auto;

//   @media screen and (max-width: 960px) {
//     width: 80%;
//   }
//   @media screen and (max-width: 600px) {
//     width: 100%;
//   }
// `;
