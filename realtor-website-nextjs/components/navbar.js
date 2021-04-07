import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import Bars from "../img/bars.png";
import Image from "next/image";

const Nav = styled.nav`
  height: 5rem;
  width: 100%;
  color: black;
  background-color: var(--background-color-dark);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 100;
  top: 0;
  opacity: 0.9;
  padding: 0 1rem;
  .logo {
    a {
      font-size: 1.4rem;
      font-weight: 600;
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
  }
  @media screen and (max-width: 800px) {
    a {
      font-size: 1.1rem;
    }
  }
  @media screen and (max-width: 600px) {
    height: 3rem;
    padding: 0;
    .navLinks {
      opacity: 0;
      pointer-events: none;
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
      justify-content: center;
      display: flex;

      a {
        font-size: 1.5rem;
        margin-left: 0;
        z-index: 100;
      }
    }
    .navBarIcon {
      display: flex;
      justify-content: flex-end;
      z-index: 11;
      margin: 0 1rem 0 auto;
      cursor: pointer;
    }
    .navActive {
      opacity: 1;
      pointer-events: auto;
      transform: translateY(140%);
      background-color: var(--background-color-dark);
    }
  }
`;

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
        <Image src={Bars} alt="bars" width={32} height={32} layout="fixed" />
      </div>
      <div className={`navLinks ${showNavbar ? "navActive" : ""}`}>
        <Link href="/">
          <a>Anasayfa</a>
        </Link>
        <Link href="/about">
          <a onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}>
            Hakkımda
          </a>
        </Link>
        <Link href="/portfolios">
          <a>Portföyler</a>
        </Link>
        <Link href="/about/#contact">
          <a>İletişim</a>
        </Link>
      </div>
    </Nav>
  );
};

export default Navbar;
