import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background: #333;
  padding: 1rem;
`;

const Title = styled.h1`
  color: white;
  text-align: center;
  width: 100%;
`;

const Header = () => (
  <Nav>
    <Title>Movie Blog</Title>
  </Nav>
);

export default Header;
