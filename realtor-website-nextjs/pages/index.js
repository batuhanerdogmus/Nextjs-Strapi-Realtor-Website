import Head from "next/head";
import Layout from "../components/layout";
import Link from "next/link";
import picture from "../img/Picture1.jpg";
import {
  HeaderContainer,
  PortfolioText,
  PortfolioContainer,
  SellContainer,
  StyledButton,
} from "../styles/StyledIndex";

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
            {user.assets.map((asset) => (
              <HeaderContainer key={asset.id}>
                <div className="header">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vero omnis pariatur quas natus placeat, voluptatem totam
                    incidunt id dolorum adipisci earum. Maxime voluptatem soluta
                    atque, voluptates excepturi dolor velit ipsa?
                  </p>
                </div>
                <div className="selection">
                  <div className="section-container">
                    <div className="section1">
                      <div className="section-img">
                        {asset.profileImg.map((img) => (
                          <img
                            style={{ objectFit: "contain" }}
                            key={img.id}
                            src={
                              "http://localhost:1337" + img.formats.small.url
                            }
                            alt=""
                          />
                        ))}
                      </div>
                      <div className="section-text">
                        <h2>{asset.home}</h2>
                        <p>{asset.aboutdescription}</p>
                        <button>İletişim</button>
                      </div>
                    </div>
                  </div>
                  <div className="section-container">
                    <div className="section1">
                      <div className="section-text">
                        <h2>Birlikte Çalışalım</h2>
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Commodi iste fugiat incidunt veniam molestiae.
                          Perferendis architecto sunt, modi maxime laboriosam
                          totam ab praesentium nisi voluptatem. Quo ad accusamus
                          eligendi possimus!
                        </p>
                      </div>
                      <div className="section-img">
                        <img src={picture} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </HeaderContainer>
            ))}
            <PortfolioText>Satışta Olan Portföyler</PortfolioText>
            <PortfolioContainer>
              {user.portfolios
                .sort((a, b) => b.id - a.id)
                .map((portfolio) => (
                  <Link href={`/portfolios/${portfolio.id}`} key={portfolio.id}>
                    <div
                      className="portfolio-card"
                      key={portfolio.id}
                      style={{ display: portfolio.onsale ? "flex" : "none" }}
                    >
                      <img
                        src={
                          "http://localhost:1337" +
                          portfolio.photos[0].formats.medium.url
                        }
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
            <Link href="/portfolio">
              <a>
                <StyledButton>Portföyler</StyledButton>
              </a>
            </Link>
            <SellContainer>
              <h1>Mülkünüzün Bugünkü Değerini Öğrenmek İstermisiniz?</h1>
              <h3>
                Bügünkü piyasa şartlarında mülkünüzün değerini öğrenmek için
                hemen iletişime geçin...
              </h3>
              <form action="#">
                <input type="email" placeholder="Email Adresiniz" />
                <button>Gönder</button>
              </form>
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
                      src={
                        "http://localhost:1337" +
                        portfolio.photos[0].formats.medium.url
                      }
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
            <div>
              <input type="range" min="0" max="200" />
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`http://localhost:1337/users`);
  const users = await res.json();
  return {
    props: { users },
  };
}
