import Head from "next/head";
import Layout from "../components/layout";

const Portfolio = ({ portfolios }) => {
  return (
    <Layout>
      <Head>
        <title>Portfolio</title>
      </Head>
      {portfolios.map((portfolio) => (
        <div key={portfolio.id}>
          <div>{portfolio.title}</div>
          <div>{portfolio.description}</div>
          <div>
            {portfolio.photos.map((photo) => (
              <div key={photo.id}>
                <img
                  src={"http://localhost:1337" + photo.formats.small.url}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </Layout>
  );
};
export async function getStaticProps() {
  const res = await fetch(`http://localhost:1337/portfolios`);
  const portfolios = await res.json();
  return {
    props: { portfolios },
  };
}

export default Portfolio;
