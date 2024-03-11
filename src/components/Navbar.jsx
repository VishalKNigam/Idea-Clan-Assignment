import React from 'react';
import { Link } from 'react-router-dom';
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

// Styled components
const Nav = styled.nav`
  background-color: #00bcd4; /* Light blue */
  padding: 10px 20px;
  border-bottom: 2px solid #008ba3; /* Dark blue */
  animation: ${fadeIn} 1s ease;
`;

const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

const Li = styled.li`
  margin-right: 20px;
`;

const NavLink = styled(Link)`
  color: #ffffff; /* White text color */
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #f5f5f5; /* Light gray text color on hover */
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Ul>
        <Li><NavLink to="/">Home</NavLink></Li>
        <Li><NavLink to="/signup">Sign Up</NavLink></Li>
        <Li><NavLink to="/login">Login</NavLink></Li>
        
      </Ul>
    </Nav>
  );
};

export default Navbar;
