import Link from "next/link";
import styled from "styled-components";

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

  a {
    margin-right: 1rem;
    font-size: 1.2rem;
    &:first-child {
      margin-left: 1.5rem;
    }
  }
`;
const Navbar = () => {
  return (
    <Nav>
      <div>
        <Link href="/">
          <a>MERAL EGEMEN</a>
        </Link>
      </div>
      <div>
        <Link href="/">
          <a>Anasayfa</a>
        </Link>
        <Link href="/about">
          <a>Hakkımda</a>
        </Link>
        <Link href="/portfolio">
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
