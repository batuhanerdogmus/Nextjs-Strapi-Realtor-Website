import styled from "styled-components";

export const HeaderContainer = styled.nav`
  height: 80vh;
  width: 100%;
  background-color: var(--background-color-light);
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    transform: rotateY(180deg) translateX(10%);
  }
`;

export const HeaderText = styled.div`
  font-size: 1.5rem;
  width: 60%;
  margin-left: 1.5rem;
  color: var(--text-color-secondary);
  text-align: center;
  button {
    color: var(--button-color);
    background-color: var(--button-background-color);
    display: inline-block;
    padding: 0.3rem 1.2rem;
    border-radius: 2rem;
    box-sizing: border-box;
    text-align: center;
    border: 0;
    transition: all 0.2s;
    &:hover {
      background-color: #4095c6;
    }
  }
`;

export const PortfolioContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  position: relative;
  padding-top: 2rem;
  div {
    width: 35%;
    height: 87%;
    overflow: hidden;
    position: relative;

    &:hover > span {
      background-color: rgba(0, 0, 0, 0.5);
      display: block;
    }
    &:hover > h4,
    &:hover > p,
    &:hover > h1 {
      opacity: 1;
    }
  }
  img {
    position: absolute;
    width: 98%;
    height: 100%;
    object-fit: cover;
    transition: all ease 0.7s;
  }

  span {
    position: absolute;
    z-index: 2;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    transition: all ease 1s;
  }
  h4,
  h1,
  p {
    z-index: 10;
    position: absolute;
    width: 100%;
    text-align: center;
    top: 10%;
    color: white;
    text-transform: capitalize;
    pointer-events: none;
    padding: 0 5px;
    opacity: 0;
    transition: all 1.5s ease;
  }
  p {
    top: 20%;
  }
  h1 {
    top: 88%;
    font-size: 1.8rem;
    font-weight: bold;
    text-transform: none;
    letter-spacing: 2px;
  }
  button {
    position: absolute;
    top: 92%;
    right: 50%;
    font-size: 1.4rem;
    padding: 6px 25px;
    border-radius: 0;
    transform: translateX(50%);
    border-radius: 2rem;
    color: var(--button-color);
    background-color: var(--button-background-color);
    box-sizing: border-box;
    text-align: center;
    border: 0;
    transition: all 0.2s;
    &:hover {
      background-color: #4095c6;
      font-size: 1.6rem;
    }
  }
`;
