import styled from "styled-components";

export const NumDisplay = styled.div`
  position: absolute;
  top: -1rem;
  left: -1rem;
  background: #ff6a95;
  color: #fff;
  width: 50px;
  height: 50px;
  padding: 10px;
  text-align: center;
  border-radius: 50%;
  font-size: 1.9rem;
  border: 1px #eee solid;
  transition: 0.3s;

  @media screen and (max-width: 450px) {
    font-size: 1.6rem;
    top: -1rem;
    left: -0.5rem;
    width: 4rem;
    height: 4rem;
  }
`;
export const TextDisplay = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;
export const Button = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;
  cursor: pointer;
  background: none;
  border: none;
`;
