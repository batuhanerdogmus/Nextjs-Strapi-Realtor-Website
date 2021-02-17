import Head from "next/head";
import Layout from "../components/layout";
import { PortfolioContainer } from "../styles/StyledIndex";
import styled from "styled-components";

const StyledPortfolio = styled(PortfolioContainer)`
  margin-top: 6rem;
  min-height: 80vh;
`;

const Portfolio = ({ users }) => {
  return (
    <Layout>
      <Head>
        <title>Portföyler</title>
      </Head>
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <StyledPortfolio>
              {user.portfolios
                .sort((a, b) => b.id - a.id)
                .map((portfolio) => (
                  <div
                    key={portfolio.id}
                    style={{ display: portfolio.onsale ? "flex" : "none" }}
                  >
                    <img
                      src={
                        "http://localhost:1337" +
                        portfolio.photos[0].formats.medium.url
                      }
                      alt={portfolio.description}
                    />
                    <span></span>
                    <h4>{portfolio.title}</h4>
                    <p>{portfolio.description}</p>
                    <h3>{portfolio.price} TL</h3>
                    <h1>MERAL EGEMEN</h1>
                  </div>
                ))}
            </StyledPortfolio>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await fetch(`http://localhost:1337/users`);
  const users = await res.json();
  return {
    props: { users },
  };
}
export default Portfolio;
