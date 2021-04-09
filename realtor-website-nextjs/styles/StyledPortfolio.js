import styled from "styled-components";

export const StyledPortfolios = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  grid-auto-rows: 32rem;

  .error {
    grid-column-start: 1;
    grid-column-end: 5;
    h1 {
      font-size: 2rem;
      color: black;
      align-items: center;
      height: 100%;
      display: flex;
      justify-content: center;
    }
  }
  .container {
    margin-top: 3rem;
  }

  .card-container {
    position: relative;
    width: 100%;
    box-shadow: -5px 8px 9px -7px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.2s ease-in;

    &:hover {
      box-shadow: -5px 8px 9px -3px;
      transform: scale(1.01);
    }
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
    top: 5%;
    pointer-events: none;
    transition: all 1.5s ease;
    opacity: 0;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    text-transform: capitalize;
  }
  h2,
  h1,
  h3,
  h4,
  p {
    text-align: center;
    color: white;
    font-size: 1.3rem;
  }
  h2 {
    font-size: 1.5rem;
  }
  h4 {
    z-index: 10;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    top: 81%;
    opacity: 0;
    font-size: 1.8rem;
    font-weight: bold;
    text-transform: none;
    letter-spacing: 2px;
  }

  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);

    .content {
      top: 84%;
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
    grid-template-columns: repeat(1, 1fr);

    .card-container > .content * {
      text-align: center;
    }
  }
  @media screen and (min-width: 1700px) {
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 32rem;
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
      padding-top: 5px;
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
        padding-left: 30%;
      }
      .searchIcon {
        left: 7%;
      }
      .room,
      button {
        border-right: none;
      }
    }
  }
`;
export const StyledPortfolio = styled.div`
  .title {
    margin-top: 4rem;
    font-size: 1.2rem;
    color: black;
    font-weight: 600;
    text-align: center;
  }
  .container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;

    .card {
      text-align: center;
      align-items: center;
      display: flex;
      flex-direction: column;
      width: 100%;
      h1 {
        font-size: 2rem;
        font-weight: bold;
      }
    }
    .logo-wrapper {
      text-align: center;
      max-width: 30rem;
      width: 100%;
      margin: 2rem 0;
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
    p {
      font-size: 1.2rem;
    }
  }
  .contact-container {
    p {
      font-size: 2rem;
      color: #131176;
      font-weight: 600;
      text-align: left;
    }
  }

  .contact {
    display: flex;
    margin: 2rem 0;
    box-shadow: 0px 0px 10px -6px;
  }
  .info {
    text-align: left;
    margin-left: 1rem;
    & * {
      margin-top: 0;
      margin-bottom: 1rem;
    }
  }
  .img-container {
    display: flex;
    img {
      max-width: 10rem;
    }
  }
  @media screen and (max-width: 1350px) {
    .container {
      align-items: flex-start;
    }
    .img-container {
      img {
        max-width: 9rem;
      }
    }
    .info {
      margin-left: 0;
      transform: scale(0.9);
    }
  }
  @media screen and (max-width: 1050px) {
    .container {
      align-items: center;
    }
    .contact-container {
      width: 94%;
      p {
        text-align: center;
      }
      .contact {
        display: none;
      }
    }
  }
  @media screen and (min-width: 1050px) {
    .description {
      .contact {
        display: none;
      }
    }
  }
  @media screen and (max-width: 450px) {
    .contact {
      flex-direction: column;
      align-items: center;
      box-shadow: none;
    }
    .container {
      align-items: flex-start;
    }
    .img-container {
      img {
        max-width: 7.5rem;
      }
    }
    .info {
      text-align: left;
      margin-left: 0;
      & * {
        font-size: 1rem;
        margin-top: 0;
        margin-bottom: 0.5rem;
      }
    }
  }
  @media screen and (min-width: 600px) {
    .title {
      margin-top: 6rem;
      font-size: 1.6rem;
      color: black;
      font-weight: 600;
      letter-spacing: 1px;
    }
    .container {
      flex-direction: row;
      .card {
        width: 74%;
      }
      .logo-wrapper {
        width: 95%;
        margin: 0;
      }
    }
  }
`;
