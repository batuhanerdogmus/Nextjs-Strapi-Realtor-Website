import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useEffect, useState } from "react";

function ArrowLeft(props) {
  return (
    <svg
      onClick={props.onClick}
      className="arrow arrow-left"
      width="20"
      height="20"
      viewBox="0 0 24 24"
    >
      <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    </svg>
  );
}
function ArrowRight(props) {
  return (
    <svg
      onClick={props.onClick}
      className="arrow arrow-right"
      width="20"
      height="20"
      viewBox="0 0 24 24"
    >
      <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
    </svg>
  );
}

const SliderContainer = ({ portfolio }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fullSize, setFullSize] = useState(false);

  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });

  const fullSizeHandler = () => {
    setFullSize(!fullSize);
  };

  return (
    <div className={!fullSize ? "card-container" : "full-size-container"}>
      <div
        ref={sliderRef}
        className={!fullSize ? "keen-slider" : "keen-slider full-size-slider"}
      >
        {portfolio.photos.map((photo) => (
          <div className="keen-slider__slide" key={photo.id}>
            <img
              onClick={fullSizeHandler}
              src={"http://localhost:1337" + photo.formats.small.url}
              alt={"photo number" + photo.id}
            />
          </div>
        ))}
      </div>
      {slider && (
        <>
          <ArrowLeft onClick={(e) => e.stopPropagation() || slider.prev()} />
          <ArrowRight onClick={(e) => e.stopPropagation() || slider.next()} />
        </>
      )}
      {slider && (
        <div className="dots">
          {[...Array(slider.details().size).keys()].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  slider.moveToSlideRelative(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SliderContainer;
