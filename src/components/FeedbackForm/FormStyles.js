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
  justify-content: space-between;
  border: 1px solid #ccc;
  padding: 1rem 1rem;
  margin: 1rem 0;
  border-radius: 0.8rem;
`;
export const Input = styled.input`
  background: transparent;
  outline: none;
  border: none;
  color: #e1e4e6;
  font-size: clamp(1.4rem, 5vw, 1.6rem);
  .btn {
    color: #fff;
    border: 0;
    border-radius: 8px;
    color: #fff;
    width: 100px;
    height: 40px;
    cursor: pointer;
  }
`;
export const Div = styled.div`
  padding-top: 10px;
  text-align: center;
  color: rebeccapurple;
`;
