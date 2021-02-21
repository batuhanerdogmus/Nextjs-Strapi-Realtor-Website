import Head from "next/head";
import { useState } from "react";
import Layout from "../../components/layout";
import Portfolios from "../../components/portfolios";

const Portfolio = ({ portfolios }) => {
  const portfolio = portfolios.map((Portfolio) => Portfolio);

  const [keyWord, setKeyWord] = useState("");

  const filteredByInput = portfolio.filter(
    (portfolio) =>
      portfolio.title.toLowerCase().includes(keyWord) ||
      portfolio.description.toLowerCase().includes(keyWord)
  );

  return (
    <Layout>
      <Head>
        <title>Portföyler</title>
      </Head>
      <Portfolios portfolio={filteredByInput} setKeyWord={setKeyWord} />
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
