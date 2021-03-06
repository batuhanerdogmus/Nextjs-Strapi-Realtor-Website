import styled from "styled-components";

export const StyledSlider = styled.div`
  width: 100vw;
  .full-size-slider {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 100;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    display: flex;
    background-color: rgb(0, 0, 0, 0.7);
    .slider {
      width: 90%;
      height: 90%;
    }

    .icon {
      display: none;
    }
    .x-icon {
      display: inline;
      width: 2.2rem;
      z-index: 3;
      margin: 0 0 auto auto;
      filter: invert(1);
    }
  }
  .slider {
    position: relative;
    height: 68vw;
    width: 100%;
    overflow: hidden;
  }
  .slide.active {
    opacity: 1;
    transition: 1s ease;
  }
  .slide {
    display: flex;
    min-height: 100%;
    min-width: 100%;
    position: absolute;
    top: 0;
    opacity: 0;
    transition: 1s ease;
  }
  .image {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .x-icon {
    display: none;
  }
  .icon {
    width: 2rem;
    z-index: 3;
    margin: auto 1rem 1rem auto;
  }

  .right-arrow {
    position: absolute;
    top: 47%;
    right: 16px;
    z-index: 10;
    cursor: pointer;
    user-select: none;
    padding: 7px 9px 2px 9px;
    border-radius: 50%;
    background-color: #ffffff7a;
  }

  .left-arrow {
    position: absolute;
    top: 47%;
    left: 16px;
    z-index: 10;
    cursor: pointer;
    user-select: none;
    padding: 7px 9px 2px 9px;
    border-radius: 50%;
    background-color: #ffffff7a;
  }
  @media screen and (min-width: 600px) {
    .slider {
      height: 39vw;
    }
  }
`;
