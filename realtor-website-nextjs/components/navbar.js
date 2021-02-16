import Link from "next/link";
import styled from "styled-components";

const Nav = styled.nav`
  height: 80px;
  width: 100%;
  color: var(--text-color);
  background-color: var(--background-color-dark);
  display: flex;
  justify-content: space-between;
  align-items: center;
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
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About Me</a>
        </Link>
        <Link href="/portfolio">
          <a>Portfolio</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </div>
    </Nav>
  );
};

export default Navbar;
