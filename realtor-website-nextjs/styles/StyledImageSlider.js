import styled from "styled-components";

export const StyledSlider = styled.div`
  .full-size-slider {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 100;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    display: flex;
    background-color: rgb(0, 0, 0, 0.7);
    .slider {
      height: 54vw;
      width: 72vw;
    }
  }
  .slider {
    position: relative;
    height: 36vw;
    width: 48vw;
    overflow: hidden;
  }
  .slide.active {
    opacity: 1;
    transition: 1s ease;
  }
  .slide {
    opacity: 0;
    transition: 1s ease;
  }
  .image {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 1000px;
    height: 100%;
    border-radius: 10px;
    object-fit: contain;
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
`;