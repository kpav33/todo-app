import React from "react";
import styled from "styled-components";

// color: var(--dark-grayish-blue);

const FooterStyle = styled.footer`
  color: var(--dark-grayish-blue);
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
