import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: #fff;
  color: #333;
  border-radius: 15px;
  padding: 3rem 4rem;
  margin: 2rem 0;
  position: relative;
`;

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
  font-size: 19px;
  border: 1px #eee solid;
  transition: 0.3s;
`;
export const TextDisplay = styled.div`
  display: flex;
  justify-content: center;
`;
