import styled from "styled-components";

export const StyledPortfolios = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 1rem;
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

    &:hover > span {
      background-color: rgba(0, 0, 0, 0.3);
      top: 0;
    }
    &:hover > h4,
    &:hover > .content {
      opacity: 1;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  span {
    position: absolute;
    z-index: 2;
    top: 100%;
    left: 0px;
    width: 100%;
    height: 100%;
    transition: all ease 1s;
  }
  .content {
    position: absolute;
    z-index: 10;
    top: 7%;
    pointer-events: none;
    transition: all 1.5s ease;
    opacity: 0;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
  }
  h2,
  h1,
  h3,
  h4,
  p {
    text-align: center;
    color: white;
    font-size: revert;
  }

  h4 {
    z-index: 10;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    top: 85%;
    opacity: 0;
    font-size: 1.8rem;
    font-weight: bold;
    text-transform: none;
    letter-spacing: 2px;
  }

  @media screen and (max-width: 1100px) {
    .container {
      flex: 0 0 49%;
      max-width: 49%;
    }
    .content {
      top: 86%;
      opacity: 1;
    }
    .card-container {
      &:hover > .content {
        top: 7%;
      }
      &:hover > .content * {
        top: 7%;
        text-align: center;
        opacity: 1;
        font-size: revert;
        margin: revert;
      }
    }

    h2 {
      text-align: start;
      font-size: 1.1rem;
      margin: 0px 0 2px 10px;
    }
    h3 {
      text-align: start;
      font-size: revert;
      margin: 0px 0 0 10px;
    }
    h4,
    p {
      opacity: 0;
    }

    span {
      background-color: rgba(0, 0, 0, 0.3);
      top: 83%;
    }
  }

  @media screen and (max-width: 600px) {
    .container {
      flex: 0 0 99%;
      max-width: 99%;
    }
    .card-container > .content * {
      text-align: center;
    }
  }
`;

export const SectionStyled = styled.div`
  margin-top: 7rem;

  .filter {
    display: none;
  }
  .container {
    text-align: -webkit-center;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
  }
  .filter-container {
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
      opacity: 0.6;
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
  select {
    padding-left: 35%;
  }
  @media screen and (max-width: 900px) {
    .container {
      font-size: 0.9rem;
    }
    select {
      padding-left: 20%;
    }
  }
  @media screen and (max-width: 600px) {
    margin-top: 5rem;

    .filter-container {
      display: none;
    }

    .container {
      width: 8%;
      margin-left: 1rem;
      transition: all 1s ease;
    }

    .container.active {
      width: 100%;
      margin-left: 0;

      .filter-container {
        display: flex;
        flex-wrap: wrap;
      }
    }

    .filter {
      display: inline;
      margin-left: 1rem;
      font-size: 1.2rem;
    }
    .box-container {
      width: calc(50%);
      .room,
      input {
        border-bottom: 1px solid black;
      }
      select,
      input {
        padding-left: 35%;
      }
      .searchIcon {
        left: 12%;
      }
      .room,
      button {
        border-right: none;
      }
    }
  }
`;

export const StyledPortfolio = styled.div`
  .container {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    margin-top: 6rem;
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
  .description {
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;

    & * {
      font-size: revert;
      font-weight: revert;
      text-align: center;
    }
  }
`;
