import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import Bars from "../img/bars.png";
const Nav = styled.nav`
  height: 5rem;
  width: 100%;
  color: var(--text-color);
  background-color: var(--background-color-dark);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 100;
  top: 0;
  opacity: 0.9;
  .logo {
    a {
      font-size: 1.3rem;
      margin-right: 0;
    }
  }
  a {
    margin-right: 1rem;
    font-size: 1.2rem;
    &:first-child {
      margin-left: 1.5rem;
    }
  }
  .navBarIcon {
    display: none;

    img {
      width: 2rem;
    }
  }
  @media screen and (max-width: 800px) {
    a {
      font-size: 1.1rem;
    }
  }
  @media screen and (max-width: 600px) {
    height: 3rem;

    .navLinks {
      opacity: 0;
      transform: translateY(100%);
      position: absolute;
      justify-content: center;
      width: 100%;
      display: flex;
      transition: all 1s ease;

      * {
        font-size: 1rem;
      }
    }
    .logo {
      width: 100%;
      position: absolute;

      a {
        font-size: 1.5rem;
        display: flex;
        justify-content: center;
      }
    }
    .navBarIcon {
      display: flex;
      justify-content: flex-end;
      width: 100%;
      z-index: 11;

      img {
        margin: 0 1rem;
      }
    }
    .navActive {
      opacity: 1;
      transform: translateY(140%);
      background-color: var(--background-color-dark);
    }
  }
`;

// const NavbarHandler = () => {
//   setShowNavbar(!showNavbar)
// }
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <Nav>
      <div className="logo">
        <Link href="/">
          <a>MERAL EGEMEN</a>
        </Link>
      </div>
      <div className="navBarIcon" onClick={() => setShowNavbar(!showNavbar)}>
        <img src={Bars} alt="" />
      </div>
      <div className={`navLinks ${showNavbar ? "navActive" : ""}`}>
        <Link href="/">
          <a>Anasayfa</a>
        </Link>
        <Link href="/about">
          <a>Hakkımda</a>
        </Link>
        <Link href="/portfolios">
          <a>Portföyler</a>
        </Link>
        <Link href="/contact">
          <a>İletişim</a>
        </Link>
      </div>
    </Nav>
  );
};

export default Navbar;
