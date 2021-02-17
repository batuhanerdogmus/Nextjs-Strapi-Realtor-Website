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

export const PortfolioText = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  background-color: gold;
`;

export const PortfolioContainer = styled.div`
  width: 100%;
  height: 75vh;
  display: flex;
  position: relative;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
  div {
    min-width: 33vw;
    height: 95%;
    overflow: hidden;
    position: relative;

    &:hover > span {
      background-color: rgba(0, 0, 0, 0.5);
      display: block;
    }
    &:hover > h4,
    &:hover > p,
    &:hover > h1,
    &:hover > h3 {
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
  h3,
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
  h3 {
    top: 70%;
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 1px;
  }
`;
export const StyledButton = styled.button`
  position: relative;
  left: 50%;
  font-size: 1.4rem;
  padding: 6px 25px;
  border-radius: 0;
  transform: translateX(-50%);
  border-radius: 2rem;
  color: var(--button-color);
  background-color: var(--button-background-color);
  box-sizing: border-box;
  text-align: center;
  border: 0;
  margin-bottom: 2rem;
  transition: all 0.2s;

  &:hover {
    background-color: #4095c6;
    font-size: 1.6rem;
  }
`;

export const SellContainer = styled.div`
  text-align: center;
  background-color: var(--background-color-light);
  padding: 5rem 0;

  h1 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.2rem;
  }

  form {
    width: 100%;
    input {
      width: 30%;
      padding: 2px;
    }
    button {
      font-size: 1.2rem;
      padding: 2px 22px;
      margin-left: 1rem;
      color: var(--button-color);
      background-color: var(--button-background-color);
      border: 0;
      transition: all 0.2s;
      &:hover {
        background-color: #4095c6;
        font-size: 1.3rem;
      }
    }
  }
`;
