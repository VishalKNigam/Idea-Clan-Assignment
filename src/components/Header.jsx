import React from 'react';
import styled, { keyframes } from 'styled-components';

// Animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const HeaderContainer = styled.header`
  background-color: #3949ab; /* Dark indigo */
  padding: 20px;
  border-bottom: 2px solid #1a237e; /* Dark indigo */
  animation: ${fadeIn} 1s ease;
`;

const Title = styled.h1`
  color: #ffffff; 
  margin: 0;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>LMS App</Title>
    </HeaderContainer>
  );
};

export default Header;
