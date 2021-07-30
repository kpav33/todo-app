import React from "react";
import styled from "styled-components";

// color: var(--dark-grayish-blue);
//color: ${({ theme }) => theme.text};

const FooterStyle = styled.footer`
  color: ${({ theme }) => theme.footerColor};
  font-size: 16px;
  margin-top: 2rem;
`;

function Footer() {
  return (
    <FooterStyle>
      <p>Drag and drop to reorder list.</p>
    </FooterStyle>
  );
}

export default Footer;
