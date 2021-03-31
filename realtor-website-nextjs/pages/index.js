import Head from "next/head";
import Layout from "../components/layout";
import Link from "next/link";
import {
  PortfolioText,
  PortfolioContainer,
  SellContainer,
  StyledButton,
} from "../styles/StyledIndex";
import Header from "../components/header";
import API from "../components/constant";
import slug from "slug";

export default function Home({ users }) {
  const currencyFormat = (num) => {
    return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + "TL";
  };

  return (
    <Layout>
      <Head>
        <title>AnaSayfa</title>
      </Head>
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <Header user={user} />
            <PortfolioText>Satışta Olan Portföyler</PortfolioText>
            <PortfolioContainer>
              {user.portfolios
                .sort((a, b) => b.id - a.id)
                .map((portfolio) => (
                  <Link
                    href={`/portfolios/${slug(portfolio.title)}-${
                      portfolio.id
                    }`}
                    key={portfolio.id}
                  >
                    <div
                      className="portfolio-card"
                      key={portfolio.id}
                      style={{ display: portfolio.onsale ? "flex" : "none" }}
                    >
                      <img
                        src={API + portfolio.photos[0].formats.medium.url}
                        alt={portfolio.title}
                      />
                      <span></span>
                      <div className="content">
                        <h2>{portfolio.title}</h2>
                        <h3>{currencyFormat(parseInt(portfolio.price))}</h3>
                        <p>Oda Sayısı: {portfolio.room}</p>
                        <p>Brüt Alan: {portfolio.area}m²</p>
                      </div>
                      <h4>MERAL EGEMEN</h4>
                    </div>
                  </Link>
                ))}
            </PortfolioContainer>
            <Link href="/portfolios">
              <StyledButton>Portföyler</StyledButton>
            </Link>
            <SellContainer>
              <h1>Mülkünüzün Bugünkü Değerini Öğrenmek İstermisiniz?</h1>
              <h3>
                Bügünkü piyasa şartlarında mülkünüzün değerini öğrenmek için
                hemen iletişime geçin...
              </h3>

              <Link href="/about/#contact">
                <button>İletişim</button>
              </Link>
            </SellContainer>
            <PortfolioText>Sattığım Portföyler</PortfolioText>
            <PortfolioContainer>
              {user.portfolios
                .sort((a, b) => b.id - a.id)
                .map((portfolio) => (
                  <div
                    className="portfolio-card"
                    key={portfolio.id}
                    style={{ display: !portfolio.onsale ? "flex" : "none" }}
                  >
                    <img
                      src={API + portfolio.photos[0].formats.medium.url}
                      alt={portfolio.title}
                    />
                    <span></span>
                    <div className="content">
                      <h2>{portfolio.title}</h2>
                      <h3>{currencyFormat(parseInt(portfolio.price))}</h3>
                      <p>Oda Sayısı: {portfolio.room}</p>
                      <p>Brüt Alan: {portfolio.area}m²</p>
                    </div>
                    <h4>MERAL EGEMEN</h4>
                  </div>
                ))}
            </PortfolioContainer>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API}/users`);
  const users = await res.json();
  return {
    props: { users },
  };
}
