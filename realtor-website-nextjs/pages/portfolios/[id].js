import Head from "next/head";
import Layout from "../../components/layout";

const PortfolioDetail = ({ portfolio }) => {
  //   console.log(portfolio);

  return (
    <Layout>
      <Head>
        <title>Portföyler</title>
      </Head>
      <div>
        <div
          className="container"
          style={{ display: portfolio.onsale ? "flex" : "none" }}
        >
          <div className="card-container">
            {portfolio.photos.map((photo) => (
              <img
                key={photo.id}
                src={"http://localhost:1337" + photo.formats.large.url}
                alt={"photo number" + photo.id}
              />
            ))}

            <span></span>
            <h4>{portfolio.title}</h4>
            <p>{portfolio.description}</p>
            <h3>{portfolio.price} TL</h3>
            <h1>MERAL EGEMEN</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:1337/portfolios`);
  const portfolios = await res.json();
  const paths = portfolios.map((portfolio) => {
    return { params: { id: `${portfolio.id}` } };
  });
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:1337/portfolios/` + params.id);
  const portfolio = await res.json();
  return {
    props: { portfolio },
  };
}

export default PortfolioDetail;
