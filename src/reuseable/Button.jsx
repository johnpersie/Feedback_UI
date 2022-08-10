import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
  background: none;
  border: none;
  width: ${({ width }) => width || "5rem"};
`;

function Button() {
  return <ButtonStyle></ButtonStyle>;
}

export default Button;
