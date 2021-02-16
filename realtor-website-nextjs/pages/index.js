import Head from "next/head";
import Layout from "../components/layout";
import styled from "styled-components";
import Link from "next/link";
import {
  HeaderText,
  HeaderContainer,
  PortfolioContainer,
} from "../styles/StyledIndex";

export default function Home({ users }) {
  console.log(users);
  return (
    <Layout>
      <Head>
        <title>Home Page</title>
      </Head>
      <div>
        {users.map((user) => (
          <div key={user.id}>
            {user.assets.map((asset) => (
              <HeaderContainer key={asset.id}>
                <HeaderText>
                  <p>{asset.home}</p>
                  <p>{asset.aboutdescription}</p>
                  <button>Contact Us</button>
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
            <PortfolioContainer>
              {user.portfolios.map((portfolio) => (
                <div key={portfolio.id}>
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
              <Link href="/portfolio">
                <a>
                  <button>SEE MORE</button>
                </a>
              </Link>
            </PortfolioContainer>
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
