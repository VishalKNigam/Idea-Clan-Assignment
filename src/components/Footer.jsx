import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const FooterContainer = styled.footer`
  background-color: #00796b; /* Teal */
  color: #ffffff; /* White text color */
  padding: 20px;
  position: fixed;
  bottom: 0;
  width: 100%;
  animation: ${fadeIn} 1s ease;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} LMS App. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
