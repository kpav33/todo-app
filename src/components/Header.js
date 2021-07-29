import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  h1 {
    letter-spacing: 9px;
  }
`;

function Header() {
  return (
    <HeaderStyle>
      <h1>TODO</h1>
      <span>Theme switcher</span>
    </HeaderStyle>
  );
}

export default Header;
