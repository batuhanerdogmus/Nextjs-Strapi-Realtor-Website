import styled from "styled-components";

export const HeaderContainer = styled.div`
  .header {
    background-image: url("https://res.cloudinary.com/batuerd/image/upload/v1617656908/large_IMG_2776_593c8c381f.jpg");
    background-size: cover;
    background-position: center;
    height: 80vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--text-color-light);
    margin-bottom: 1.7rem;

    h1 {
      font-size: 5.5rem;
      font-weight: 600;
      letter-spacing: 8px;
      color: red;
      margin: 0;
      line-height: 1.2;
      z-index: 1;
      text-shadow: -1px 1px 3px white;
    }
    h2 {
      font-size: 6rem;
      margin: 0;
      line-height: 0;
      text-shadow: -1px 1px 3px black;
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
      background-color: #2451a7;
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
      line-height: 1.6;
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
    }
  }
  @media screen and (max-width: 600px) {
    .header {
      h1 {
        font-size: 2rem;
        letter-spacing: 3px;
      }
      h2 {
        font-size: 2rem;
      }
    }
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
  height: 32rem;
  display: flex;
  position: relative;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
  .portfolio-card {
    min-width: 24.8vw;
    max-width: 33vw;
    height: 95%;
    overflow: hidden;
    position: relative;
    margin-left: 1rem;
    cursor: pointer;

    box-shadow: -5px 8px 9px -7px;
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
    top: 7%;
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
    font-size: 1.4rem;
  }
  h2 {
    font-size: 1.7rem;
  }
  h4 {
    z-index: 10;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    top: 82%;
    opacity: 0;
    font-size: 1.8rem;
    font-weight: bold;
    text-transform: none;
    letter-spacing: 2px;
    transition: opacity 1.5s ease-in-out;
  }
  @media screen and (max-width: 1400px) {
    .content {
      top: 86%;
      opacity: 1;
    }
    .portfolio-card {
      min-width: 31.8vw;
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
      font-size: 1.3rem;
      margin: 0px 0 2px 10px;
    }
    h3 {
      text-align: start;
      font-size: 1rem;
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
  @media screen and (max-width: 900px) {
    .portfolio-card {
      min-width: 48vw;
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
export const StyledButton = styled.div`
  .contact {
    left: 0;
    transform: translateX(0);
  }
  button {
    position: relative;
    left: 50%;
    font-size: 1.5rem;
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
    box-shadow: -5px 8px 9px -6px black;
    text-shadow: -1px 1px 6px black;

    transition: all 0.3s;

    &:hover {
      background-color: var(--button-hover-color);
      font-size: 1.6rem;
      letter-spacing: 2px;
      text-shadow: -2px 2px 7px black;
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

  @media screen and (max-width: 800px) {
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
  }
`;
