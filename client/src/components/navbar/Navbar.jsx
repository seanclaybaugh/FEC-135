import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { GoThreeBars } from 'react-icons/go';

const StyledNavbar = styled.nav`
  background: #fff;
  height: 40px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1200px) / 2);
  z-index: 10;
`;

const StyledNavLink = styled(NavLink)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #000;
  }
`;

const StyledNavHeader = styled.h1`
  font-family: 'Benne', 'Roboto', 'Arial', 'Helvetica', serif;
`;

const StyledNavText = styled.div`
  padding: 5px 0 5px 0;
  border-bottom: solid 3px #fff;
  font-size: 14px;
  transition: border-color 0.3s ease;

  :hover {
    top: 3px;
    border-bottom: solid 3px #9a9a9a;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

function Navbar() {
  return (
    <>
      <StyledNavbar>
        <NavMenu>
          <StyledNavLink to="/">
            <StyledNavText>New!</StyledNavText>
          </StyledNavLink>
          <StyledNavLink to="/">
            <StyledNavText>Shop</StyledNavText>
          </StyledNavLink>
          <StyledNavLink to="/">
            <StyledNavText>About</StyledNavText>
          </StyledNavLink>
        </NavMenu>
        <StyledNavLink to="/">
          <StyledNavHeader>Company Name</StyledNavHeader>
        </StyledNavLink>
        <NavMenu>
          <StyledNavLink to="/">
            <StyledNavText>Search</StyledNavText>
          </StyledNavLink>
          <StyledNavLink to="/">
            <StyledNavText>My Account</StyledNavText>
          </StyledNavLink>
          <StyledNavLink to="/">
            <StyledNavText>Cart</StyledNavText>
          </StyledNavLink>
        </NavMenu>
      </StyledNavbar>
    </>
  )
}

export default Navbar;
