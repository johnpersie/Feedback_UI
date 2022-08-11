import styled from "styled-components";
import { NumDisplay } from "../FeedbackItem/feedbackItemStyled";

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 30px 0 40px;
  flex-wrap: wrap;
`;
export const List = styled.li`
  position: relative;
  background: #151a1e;
  width: 50px;
  height: 50px;
  padding: 10px;
  text-align: center;
  border-radius: 50%;
  font-size: 19px;
  border: 1px #151a1e solid;
  transition: 0.3s;

  :hover {
    background: #ff6a95;
    color: #fff;
  }

  label {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50px;
    height: 50px;
    padding: 10px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }

  [type="radio"] {
    opacity: 0;
  }

  [type="radio"]:checked ~ label {
    background: #ff6a95;
    color: #fff;
  }
  input {
    flex-grow: 2;
    border: none;
    font-size: 16px;
    background: ${(color) => (color ? "#151a1e" : "")};

    @media screen and (max-width: 600px) {
      flex-grow: 1;
    }
  }

  input:focus {
    outline: none;
  }
`;
