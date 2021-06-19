import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { GoThreeBars } from 'react-icons/go';
import { VscAccount } from 'react-icons/vsc';
import { BsSearch } from 'react-icons/bs';

const StyledNavbar = styled.nav`
  background: #fff;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem calc((100vw - 1200px) / 2);
  position: sticky;
  top: 0;
  z-index: 10;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1200px) {
    display: none;
  }
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
  font-family: 'Oswald', 'Roboto', 'Arial', 'Helvetica', serif;
  font-size: 28px;
`;

const StyledNavText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 0 5px 0;
  border-bottom: solid 3px #fff;
  font-size: 14px;
  transition: border-color 0.3s ease;

  :hover {
    top: 3px;
    border-bottom: solid 3px #9a9a9a;
  }
`;

const Bars = styled(FaBars)`
  display: none;
  color: #000;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

const StyledSearchIcon = styled(BsSearch)`
  padding-right: 5px;
  font-size: 16px;
`;

const StyledAccountIcon = styled(VscAccount)`
  padding-right: 5px;
  font-size: 16px;
`;

function Navbar({ items }) {
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    setCartItems(cartItems + items);
  }, [items])

  return (
    <>
      <StyledNavbar>
        <NavMenu>
          <StyledNavLink to="/"><StyledNavText>New!</StyledNavText></StyledNavLink>
          <StyledNavLink to="/"><StyledNavText>Shop</StyledNavText></StyledNavLink>
          <StyledNavLink to="/"><StyledNavText>About</StyledNavText></StyledNavLink>
        </NavMenu>
        <Bars />
        <StyledNavLink to="/"><StyledNavHeader>FOREVER 31</StyledNavHeader></StyledNavLink>
        <NavMenu>
          <StyledNavLink to="/"><StyledNavText><StyledSearchIcon />Search</StyledNavText></StyledNavLink>
          <StyledNavLink to="/"><StyledNavText><StyledAccountIcon />My Account</StyledNavText></StyledNavLink>
          <StyledNavLink to="/"><StyledNavText>{`Cart (${cartItems})`}</StyledNavText></StyledNavLink>
        </NavMenu>
      </StyledNavbar>
    </>
  )
}

export default Navbar;
