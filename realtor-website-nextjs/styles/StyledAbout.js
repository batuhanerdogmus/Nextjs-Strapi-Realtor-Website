import styled from "styled-components";

export const StyledAboutPage = styled.div`
  .background {
    clip-path: polygon(
      0 0,
      100% 0,
      100% 45%,
      52% 68%,
      49% 69%,
      46% 69.5%,
      44% 69.5%,
      42% 69%,
      40% 68%,
      38% 66.5%,
      37.5% 66%,
      36% 65%,
      35% 64%,
      0 30%
    );

    background-color: #0c214a;
    width: 100%;
    height: 600px;
    position: absolute;
    z-index: 0;
  }
  .container {
    display: flex;
    flex-direction: row;
    margin-top: 5rem;
    padding: 5rem;
    background-color: var(--background-color-dark);
    height: 65vh;
    align-items: center;
  }
  .description {
    color: white;
    z-index: 2;

    h1 {
      position: absolute;
      top: 10%;
      left: 50%;
      transform: translateX(-50%);
      font-size: 2rem;
      font-weight: 600;
      letter-spacing: 1px;
      width: 100%;
      text-align: center;
    }
    p {
      text-align: start;
      position: absolute;
      width: 50%;
      top: 21%;
      left: 10%;
    }
  }
  .photo {
    right: 8%;
    position: absolute;

    img {
      max-width: 16rem;
      transform: rotateY(180deg);
    }
  }
  .services {
    background-color: var(--background-color-light);
    padding: 2rem 0 3rem 0;
  }
  .services-text {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 2rem auto;
    h1 {
      font-size: 2rem;
      text-align: center;
    }
  }
  .card-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, 22rem);
    grid-auto-rows: 33rem;
    grid-gap: 3rem;
    justify-content: center;
    margin: auto;
    width: 90%;

    .card {
      margin-bottom: 3rem;
      background-color: var(--background-color-dark);
      box-shadow: -5px 8px 9px -7px;
      height: 100%;
    }
    .card-text {
      height: 15rem;
      padding: 1rem;
    }
    img {
      display: flex;
      width: 100%;
    }
  }
  .gain {
    background-color: #101010;
    padding: 1rem;
    .gain-container {
      color: white;
      text-align: center;

      h1 {
        font-size: 2rem;
      }
      h2 {
        color: red;
        font-size: 1.5rem;
      }
    }
  }

  .risks {
    background-image: url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-blend-mode: hard-light;
    background-color: black;
    padding: 2rem 0;
  }
  .risks-text {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
    h1 {
      font-size: 2rem;
      text-align: center;
    }
  }
  .risks-card-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, 22rem);
    grid-auto-rows: 23rem;
    grid-gap: 3rem;
    justify-content: center;
    margin: auto;
    width: 90%;
    .risks-card {
      margin-bottom: 3rem;
      background-color: rgba(255, 255, 255, 0.7);
      box-shadow: -5px 8px 9px -7px;
      height: 100%;
    }
    h2 {
      font-size: 1.1rem;
      text-align: center;
      font-weight: 600;
    }
    .risks-card-text {
      height: 15rem;
      padding: 1rem;
    }
    img {
      display: flex;
      width: 6rem;
      height: 6rem;
      padding: 0.8rem;
      margin: auto;
    }
  }
  @media screen and (max-width: 900px) {
    .photo {
      right: 4%;
      top: 20%;
      img {
        max-width: 13rem;
      }
    }
    .description {
      p {
        width: 61%;
        top: 21%;
        left: 12%;
      }
    }
  }

  @media screen and (max-width: 600px) {
    .background {
      clip-path: polygon(0 0, 100% 0, 100% 45%, 29% 74%, 0 58%);
    }
    .container {
      margin-top: 3rem;
    }
    .photo {
      right: 1%;
      top: 27%;
      img {
        max-width: 11rem;
      }
    }
    .description {
      h1 {
        font-size: 1.5rem;
      }
      p {
        width: 61%;
        top: 23%;
        left: 6%;
      }
    }
    .services {
      h1 {
        font-size: 1.5rem;
      }
      p {
        font-size: 0.9rem;
        margin: 0.5rem 0;
      }
    }
    .card-container {
      grid-gap: 1.5rem;
      grid-auto-rows: 29rem;
    }
    .risks {
      h1 {
        font-size: 1.5rem;
      }
      p {
        font-size: 0.9rem;
        margin: 0.5rem 0;
      }
    }
    .risks-card-container {
      grid-gap: 1.5rem;
      grid-auto-rows: 21rem;
    }
  }

  @media screen and (max-width: 400px) {
    .card-container {
      grid-template-columns: auto;
    }
    .risks-card-container {
      grid-template-columns: auto;
      grid-auto-rows: auto;
      grid-gap: 1rem;
    }
    .photo {
      right: 1%;
      top: 35%;
      img {
        max-width: 10rem;
      }
    }
  }
  @media screen and (min-width: 1700px) {
    .background {
      height: 800px;
    }
    .services,
    .risks {
      h1 {
        font-size: 2.5rem;
      }
      h2 {
        font-size: 1.5rem;
      }
      p {
        font-size: 1.1rem;
        margin: 0.8rem 0;
      }
    }
    .services-text {
      width: 68%;
      p {
        font-size: 1.3rem;
      }
    }
    .card-container {
      grid-template-columns: repeat(3, 26rem);
    }

    .risks-card-container {
      grid-template-columns: repeat(3, 26rem);
      grid-auto-rows: auto;
      grid-gap: 1.6rem;
    }
  }
`;