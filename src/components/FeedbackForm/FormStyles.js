import styled from "styled-components";

export const FormContainer = styled.form`
  width: 100%;
  text-align: center;

  h2 {
    font-size: clamp(2rem, 5vw, 2.5rem);
  }
`;
export const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #ccc;
  padding: 0.8rem 1rem;
  border-radius: 0.8rem;

  input {
    flex-grow: 2;
    border: none;
    font-size: 1.6rem;
    outline: none;
  }
`;
export const Div = styled.div`
  padding-top: 10px;
  text-align: center;
  color: rebeccapurple;
`;
