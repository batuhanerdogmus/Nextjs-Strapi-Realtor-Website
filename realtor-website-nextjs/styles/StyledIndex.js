import styled from "styled-components";
import gardenImg from "../img/IMG_2776.jpg";
export const HeaderContainer = styled.div`
  .header {
    background-image: url(${gardenImg});
    background-size: cover;
    height: 80vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    color: var(--text-color-light);
    margin-bottom: 1.7rem;

    p {
      font-size: 1.5rem;
      width: 100%;
      margin: 1.5rem;
      text-align: center;
    }
  }
  .section-container {
    width: 100%;
    height: 50vh;
    justify-content: center;
    display: flex;
  }
  .section1 {
    height: 100%;
    width: 77rem;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    color: white;
  }
  .section-img {
    width: 54rem;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      background-color: #424242;
    }
  }
  .section-text {
    background-color: var(--background-color-light);
    font-size: 1.5rem;
    width: 70%;
    max-width: 60rem;
    color: var(--text-color);
    text-align: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;

    h2 {
      max-width: 78%;
    }
    p {
      max-width: 85%;
    }

    button {
      font-size: 1.3rem;
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
        background-color: var(--button-hover-color);
        font-size: 1.4rem;
        letter-spacing: 2px;
      }
    }
  }
  @media screen and (max-width: 1270px) {
    .section-text {
      font-size: 1.2rem;
    }
    .section1 {
      width: 54rem;
    }
    .section-img {
      width: 37.8rem;
    }
  }
  @media screen and (max-width: 900px) {
    .section1 {
      width: 36rem;
    }
    .section-img {
      width: 25.2rem;
    }
    .section-text {
      font-size: 1rem;
      button {
        width: 7rem;
      }
    }
  }
  @media screen and (max-width: 600px) {
    .section-container:last-child {
      .section1 {
        flex-direction: column-reverse;
      }
    }
    .section-container {
      height: 100%;
    }
    .section1 {
      height: 100%;
      width: 100%;
      flex-direction: column;
    }
    .section-img {
      width: 100%;
      height: 18rem;
    }

    .section-text {
      width: 100%;
      font-size: 0.9rem;
      button {
        margin-bottom: 1rem;
      }
    }
  }
`;

export const PortfolioText = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  background-color: var(--background-color);
  letter-spacing: 5px;
`;

export const PortfolioContainer = styled.div`
  width: 100%;
  height: 75vh;
  display: flex;
  position: relative;
  overflow-y: hidden;
  justify-content: space-between;
  &::-webkit-scrollbar {
    display: none;
  }
  .portfolio-card {
    min-width: 31.8vw;
    height: 95%;
    overflow: hidden;
    position: relative;
    margin-left: 1rem;

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
    .content {
      top: 86%;
      opacity: 1;
    }
    .portfolio-card {
      min-width: 48vw;

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
      font-size: 0.9rem;
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
    .portfolio-card {
      min-width: 98vw;
    }
    .portfolio-card > .content * {
      text-align: center;
    }
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
    background-color: var(--button-hover-color);
    font-size: 1.5em;
    letter-spacing: 2px;
  }
  @media screen and (max-width: 1100px) {
    font-size: 1.2rem;
    padding: 5px 18px;
    &:hover {
      font-size: 1.3rem;
    }
  }
  @media screen and (max-width: 600px) {
    font-size: 1.1rem;
    padding: 5px 15px;
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
        background-color: var(--button-hover-color);
        font-size: 1.3rem;
        letter-spacing: 2px;
      }
    }
  }
  @media screen and (max-width: 800px) {
    form input {
      width: 50%;
    }
    h1 {
      font-size: 1.8rem;
    }
    h3 {
      font-size: 1.1rem;
    }
  }

  @media screen and (max-width: 500px) {
    padding: 2rem 0;
    h1 {
      font-size: 1.4rem;
    }
    h3 {
      font-size: 0.9rem;
    }
    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 7rem;
      justify-content: space-around;
      input {
        width: 90%;
        padding: 2px;
      }
      button {
        margin-left: 0;
        width: 8rem;
        font-size: 1rem;
        padding: 3px;
      }
    }
  }
`;
