import styled from "styled-components";

export const StyledPortfolio = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem;
  justify-content: space-between;
  .container {
    flex: 0 0 32%;
    max-width: 32%;
    height: 60vh;
    margin-top: 3rem;
  }
  .card-container {
    position: relative;
    width: 100%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
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
      top: 83%;
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
  }
`;

export const SectionStyled = styled.div`
  margin-top: 8rem;
  text-align: -webkit-center;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  .container {
    width: 100%;
    display: flex;
  }
  .box-container {
    height: 2.5rem;
    width: calc(25%);
    display: flex;
    align-items: center;
    select,
    button,
    input {
      width: 100%;
      height: 100%;
      border: none;
      border-right: 1px solid black;
    }
    input {
      padding-left: 2.5rem;
    }
    .searchIcon {
      position: absolute;
      left: 0.5rem;
    }
    select {
      padding-left: 35%;
    }
    button {
      background-color: white;
      border-right: none;
      display: flex;
      align-items: center;
      justify-content: center;

      transition: all 0.2s;
      &:hover {
        background-color: var(--background-color-dark);
      }
      div {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;
