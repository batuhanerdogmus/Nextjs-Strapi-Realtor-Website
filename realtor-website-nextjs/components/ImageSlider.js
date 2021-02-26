import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { StyledSlider } from "../styles/StyledImageSlider";

const ImageSlider = ({ portfolio }) => {
  const [current, setCurrent] = useState(0);
  const [fullSize, setFullSize] = useState(false);

  const fullSizeHandler = () => {
    setFullSize(!fullSize);
  };
  const length = portfolio.photos.length;
  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  if (!Array.isArray || length <= 0) {
    return null;
  }

  return (
    <StyledSlider>
      <div className={fullSize ? "full-size-slider" : ""}>
        <div className="slider">
          <div className="left-arrow" onClick={prevSlide}>
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            </svg>
          </div>
          <div className="right-arrow" onClick={nextSlide}>
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            </svg>
          </div>

          {portfolio.photos.map((slide, index) => {
            return (
              <div
                className={index === current ? "slide active" : "slide"}
                key={index}
              >
                <img
                  {...handlers}
                  onClick={fullSizeHandler}
                  src={"http://localhost:1337" + slide.formats.small.url}
                  alt="image"
                  className="image"
                  draggable="false"
                />
              </div>
            );
          })}
        </div>
      </div>
    </StyledSlider>
  );
};

export default ImageSlider;
