import React from "react";
import styled from "styled-components";

import { FiSun } from "react-icons/fi";
import { IoMoonSharp } from "react-icons/io5";

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  h1 {
    letter-spacing: 9px;
  }

  svg {
    cursor: pointer;
    color: white;
  }

  button {
    border: none;
    background: none;
  }
`;

function Header({ themeToggler, theme }) {
  return (
    <HeaderStyle>
      <h1>TODO</h1>
      <button onClick={() => themeToggler()}>
        {theme === "dark" ? (
          <FiSun fill="white" size="22px" />
        ) : (
          <IoMoonSharp fill="white" size="22px" />
        )}
      </button>
    </HeaderStyle>
  );
}

export default Header;
