import styled from "styled-components";

export const StyledPortfolios = styled.div`
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
export const StyledPortfolio = styled.div`
  .container {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    .card {
      text-align: center;
      align-items: center;
      display: flex;
      flex-direction: column;
      h1 {
        font-size: 2rem;
        font-weight: bold;
      }
    }
    .full-size-container {
      position: absolute;
      min-width: 100vw;
      min-height: 100vh;
      top: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: black;
    }
    .full-size-slider {
      width: 80%;
      height: 80%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .logo-wrapper {
      text-align: center;
      width: 26rem;
    }
    .logo-container {
      display: flex;
      width: 100%;
      height: 8rem;
      justify-content: space-between;
      .logo-detail {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        .logo-text {
          width: min-content;
          display: flex;
          flex-direction: column;
        }
        h4 {
          font-size: 1rem;
        }
        a {
          font-size: 1rem;
        }
      }
      .logo {
        width: 2.5rem;
        height: 100%;
        display: flex;
        align-items: end;
        svg {
          fill: #131176;
        }
      }
      .line {
        min-height: 90%;
        background-color: #131176;
        border: 3px solid #131176;
        white-space: pre-wrap;
      }
    }
  }
  .description * {
    font-size: revert;
    font-weight: revert;
    text-align: center;
  }

  .card-container {
    margin: 3rem 0 0 0;
    width: 40vw;
    height: 70vh;
    .keen-slider {
      width: 100%;
      height: 95%;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .arrow {
      display: flex;
      position: relative;
      bottom: 50%;
    }
    .arrow-left {
      float: left;
    }
    .arrow-right {
      float: right;
    }
    .dots {
      text-align: center;
      .dot {
        border-radius: 50%;
        height: 10px;
        width: 10px;
        padding: 0;
        margin: 0 2px;
      }
    }
  }
`;
