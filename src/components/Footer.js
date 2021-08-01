import React, { useContext } from "react";
import { Context } from "../Context";
import styled from "styled-components";

const FooterStyle = styled.footer`
  color: ${({ theme }) => theme.footerColor};
  font-size: 16px;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    border: none;
    color: ${({ theme }) => theme.footerColor};
    background: ${({ theme }) => theme.backgroundInput};
    font-size: 16px;
    font-family: "Josefin Sans", sans-serif;
    cursor: pointer;
    padding: 0.7rem 1rem;
    border-radius: 9px;

    &:focus {
      color: var(--bright-blue);
    }

    &:hover {
      color: ${({ theme }) => theme.buttonHover};
    }
  }
`;

function Footer() {
  const { clearLocalStorage } = useContext(Context);

  return (
    <FooterStyle>
      <p>Drag and drop to reorder list.</p>
      <button onClick={clearLocalStorage}>Clear saved items</button>
    </FooterStyle>
  );
}

export default Footer;
