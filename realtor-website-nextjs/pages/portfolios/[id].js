import Head from "next/head";
import Layout from "../../components/layout";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import { StyledPortfolio } from "../../styles/StyledPortfolio";

function ArrowLeft(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
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

const PortfolioDetail = ({ portfolio }) => {
  console.log(portfolio);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });

  return (
    <Layout>
      <Head>
        <title>{portfolio.title}</title>
      </Head>
      <StyledPortfolio>
        <div className="container">
          <div className="card-container">
            <div ref={sliderRef} className="keen-slider">
              {portfolio.photos.map((photo) => (
                <div className="keen-slider__slide" key={photo.id}>
                  <img
                    src={"http://localhost:1337" + photo.formats.small.url}
                    alt={"photo number" + photo.id}
                  />
                </div>
              ))}
            </div>
            {slider && (
              <>
                <ArrowLeft
                  onClick={(e) => e.stopPropagation() || slider.prev()}
                  disabled={currentSlide === 0}
                />
                <ArrowRight
                  onClick={(e) => e.stopPropagation() || slider.next()}
                  disabled={currentSlide === slider.details().size - 1}
                />
              </>
            )}
          </div>
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
        {/*         
        <h4>{portfolio.title}</h4>
            <p>{portfolio.description}</p>
            <h3>{portfolio.price} TL</h3>
            <h1>MERAL EGEMEN</h1> */}
      </StyledPortfolio>
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const res = await fetch(`http://localhost:1337/portfolios/` + params.id);
  const portfolio = await res.json();

  return {
    props: { portfolio },
  };
}

// export async function getStaticProps({ params }) {
//   const res = await fetch(`http://localhost:1337/portfolios/` + params.id);
//   const portfolio = await res.json();
//   return {
//     props: { portfolio },
//   };
// }

export default PortfolioDetail;

// SLİDER

// {slider && (
//     <div className="dots">
//       {[...Array(slider.details().size).keys()].map((idx) => {
//         return (
//           <div>
//             <img
//               key={idx}
//               onClick={() => {
//                 slider.moveToSlideRelative(idx);
//               }}
//               className={
//                 "dot" + (currentSlide === idx ? " active" : "")
//               }
//               src={
//                 "http://localhost:1337" +
//                 portfolio.photos[idx].formats.small.url
//               }
//               alt={"photo number"}
//             />
//           </div>
//         );
//       })}
//     </div>
//   )}
