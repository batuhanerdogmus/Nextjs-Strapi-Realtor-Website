import Head from "next/head";
import Layout from "../components/layout";
import Link from "next/link";
import {
  HeaderText,
  HeaderContainer,
  PortfolioText,
  PortfolioContainer,
  SellContainer,
  StyledButton,
} from "../styles/StyledIndex";

export default function Home({ users }) {
  console.log(users);

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
                <HeaderText>
                  <p>{asset.home}</p>
                  <p>{asset.aboutdescription}</p>
                  <button>İletişim</button>
                </HeaderText>
                <div>
                  {asset.profileImg.map((img) => (
                    <div key={img.id}>
                      <img
                        src={"http://localhost:1337" + img.formats.small.url}
                        alt=""
                      />
                    </div>
                  ))}
                </div>
              </HeaderContainer>
            ))}
            <PortfolioText>Satışta Olan Portföyler</PortfolioText>
            <PortfolioContainer>
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
                    key={portfolio.id}
                    style={{ display: !portfolio.onsale ? "flex" : "none" }}
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
                    <h1>MERAL EGEMEN</h1>
                  </div>
                ))}
            </PortfolioContainer>
            <Link href="/portfolio">
              <a>
                <StyledButton>Portföyler</StyledButton>
              </a>
            </Link>
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
