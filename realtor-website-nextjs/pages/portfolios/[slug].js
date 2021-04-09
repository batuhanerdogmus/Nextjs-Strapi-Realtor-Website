import Head from "next/head";
import Layout from "../../components/layout";
import { StyledPortfolio } from "../../styles/StyledPortfolio";
import ReactMarkdown from "react-markdown";
import KeyboardEvent from "../../components/useKeyboardEvent";
import { Description } from "../../components/description";
import slug from "slug";
import API from "../../components/constant";
import Image from "next/image";
import bathtub from "../../img/bathtub.svg";
import bed from "../../img/bed.svg";
import cube from "../../img/cube.svg";
import virtual from "../../img/360d.svg";

const PortfolioDetail = ({ portfolio }) => {
  const currencyFormat = (num) => {
    return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + "TL";
  };
  return (
    <Layout>
      <Head>
        <title>{portfolio.title}</title>
      </Head>
      <StyledPortfolio>
        <h1 className="title">{portfolio.title}</h1>
        <div className="container">
          <KeyboardEvent portfolio={portfolio} />

          <div className="card">
            <div className="logo-wrapper">
              <div className="logo-container">
                <div className="logo-detail">
                  <div className="logo">
                    <Image
                      src={cube}
                      alt="bathtub icon"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div>
                    <h4>{portfolio.area}m²</h4>
                    <h4>Brüt Alan</h4>
                  </div>
                </div>
                <div className="line"></div>
                <div className="logo-detail">
                  <div className="logo">
                    <Image
                      src={bathtub}
                      alt="bathtub icon"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div>
                    <h4>{portfolio.bath}</h4>
                    <h4>Banyo</h4>
                  </div>
                </div>
                <div className="line"></div>
                <div className="logo-detail">
                  <div className="logo">
                    <Image src={bed} alt="bed icon" width={40} height={40} />
                  </div>
                  <div>
                    <h4>{portfolio.room}</h4>
                    <h4>Oda</h4>
                  </div>
                </div>

                <div className="line"></div>
                <div className="logo-detail">
                  <div className="logo">
                    <Image
                      src={virtual}
                      alt="bed icon"
                      width={122.88}
                      height={65.79}
                    />
                  </div>
                  <div className="logo-text">
                    {portfolio.virtual ? (
                      <>
                        <h4>Sanal tur için</h4>
                        <a
                          target="_blank"
                          href={portfolio.virtual}
                          style={{ color: "revert" }}
                        >
                          Tıklayın
                        </a>
                      </>
                    ) : (
                      <h4>Mevcut değil</h4>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-container">
              <p>{currencyFormat(parseInt(portfolio.price))}</p>
              <Description />
            </div>
          </div>
        </div>
        <div className="description">
          <Description />
          <ReactMarkdown source={portfolio.description} />
        </div>
      </StyledPortfolio>
    </Layout>
  );
};
export async function getStaticPaths() {
  const res = await fetch(`${API}/portfolios`);
  const portfolios = await res.json();
  const paths = portfolios.map((portfolio) => {
    return { params: { slug: `${slug(portfolio.title)}-${portfolio.id}` } };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const id = params.slug.split("-").slice(-1)[0];
  const res = await fetch(`${API}/portfolios/` + id);
  const portfolio = await res.json();
  return {
    props: { portfolio },
  };
}

export default PortfolioDetail;
