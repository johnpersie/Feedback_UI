import styled from "styled-components";
const ButtonStyle = styled.button`
  border: 0;
  border-radius: 8px;
  color: #fff;
  width: 20%;
  font-size: 1.6rem;
  height: 40px;
  background-color: #202142;
  cursor: pointer;
  text-align: center;

  .primary {
    background-color: #202142;
  }

  .secondary {
    background: #ff6a95;
  }

  :hover {
    transform: scale(0.98);
    opacity: 0.9;
  }

  :disabled {
    background-color: #cccccc;
    color: #333;
    cursor: auto;
  }

  :disabled:hover {
    transform: scale(1);
    opacity: 1;
  }
`;

function Button({ children, type, version, isDisabled }) {
  return (
    <ButtonStyle
      type={type}
      isdisabled={isDisabled}
      className={`ButtonStyle${version}`}
    >
      {children}
    </ButtonStyle>
  );
}

export default Button;
