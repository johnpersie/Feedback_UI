import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Wrapper = styled.div`
  margin: auto;
  padding: 3rem 0 1rem 0;

  h2 {
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    font-weight: 900;
    color: #f8f8f6;
  }
`;
