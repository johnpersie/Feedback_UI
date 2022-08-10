import React from "react";
import { HeaderContainer, Wrapper } from "./headerStyled";

function Header() {
  return (
    <HeaderContainer
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        color: "hsl(150,90%, 72%)",
      }}
    >
      <Wrapper>
        <h2>Feedback Hub</h2>
      </Wrapper>
    </HeaderContainer>
  );
}

export default Header;
