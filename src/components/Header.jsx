import React from "react";
import styled from "styled-components";

const Header = (props) => {
  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="Disney+" />
      </Logo>
      <>
        <NavMenu>
          <a href="/home">
            <img src="/images/home-icon.svg" />
            <span>Home</span>
          </a>
        </NavMenu>
      </>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  height: 70px;
  letter-spacing: 16px;
  z-index: 3;
`;
const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-flow: row nowrap;
  height: 100%;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }
  }

  /* 
  @media (max-width: 768px) {
    display: none;
  }  */
`;

export default Header;
