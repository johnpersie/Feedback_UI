import styled, { createGlobalStyle } from "styled-components";
import bg from "../feedback.jpg";

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
  background-image: linear-gradient(0deg, rgba(9,9,18,0.9108018207282913) 0%, rgba(1,4,13,0.31976540616246496) 100%),
  url(${bg});
  font-family: 'Poppins', sans-serif;
  line-height: 1.6;
  font-size: 1.6rem;
  background-attachment: fixed;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  overflow: auto;
  width: 100%;
}

ul {
  list-style: none;
}


`;
export const Container = styled.div`
  max-width: 120rem;
  width: 50%;
  margin: 4rem auto;
  background-color: #151a1e;
  border-radius: 2rem;
  padding: 2rem 2rem;

  p {
    display: inline-block;
    font-size: clamp(1.6rem, 5vw, 1.8rem);
    color: #e1e4e6;
  }

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
