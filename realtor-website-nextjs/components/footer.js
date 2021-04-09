import styled from "styled-components";
import facebook from "../img/facebook.svg";
import instagram from "../img/instagram.svg";
import linkedin from "../img/linkedin.svg";
import Image from "next/image";

const StyledFooter = styled.div`
  footer {
    text-align: center;
    background-color: var(--background-color);
    width: 100%;
  }
  width: 100%;
  text-transform: capitalize;
  color: var(--text-color);
  background-color: var(--background-color-dark);
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: center;
  margin-top: 1rem;
  flex-direction: column;

  .address-container {
    width: 100%;
    margin-bottom: 1.5rem;

    address {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
    }
  }
  .social-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin: 1.5rem 0;
    text-align: center;
    flex-wrap: wrap;

    .social {
      display: flex;
      & > * {
        margin: auto 10px;
      }
    }
    p {
      font-size: 1.5rem;
      font-weight: 600;
      font-style: italic;
    }
    a {
      display: flex;
      &:hover {
        transform: scale(1.2);
      }
      img {
        width: 2.5rem;
        display: flex;
        transition: transform 0.3s ease-in-out;
      }
    }
  }

  @media screen and (max-width: 600px) {
    footer {
      font-size: 0.7rem;
    }
    .address-container {
      margin-bottom: 0.5rem;
      address {
        flex-direction: column;
      }
    }
    .social-container {
      flex-direction: column;
      margin: 0;
      .social {
        margin: auto;
      }
    }
  }
`;
const Footer = () => {
  return (
    <>
      <StyledFooter>
        <div className="social-container">
          <p>Sosyal Medya İle</p>
          <div className="social">
            <a
              target="_blank"
              href={"https://www.facebook.com/meralegemen2004"}
            >
              <Image
                src={facebook}
                alt="facebook icon"
                width={333.4}
                height={333.4}
              />
            </a>
            <a
              target="_blank"
              href={"https://www.instagram.com/meralegemenrw/"}
            >
              <Image
                src={instagram}
                alt="instagram icon"
                width={333.4}
                height={333.4}
              />
            </a>
            <a
              target="_blank"
              href={"https://www.linkedin.com/in/meralegemenrw/"}
            >
              <Image
                src={linkedin}
                alt="linkedin icon"
                width={333.4}
                height={333.4}
              />
            </a>
          </div>
          <p>Takipte Kalın</p>
        </div>
        <div className="address-container">
          <address>
            <p>RealtyWorld Yıldız Gayrimenkul</p>
            <p>
              tel: +90 537 245 5007 <br />
              uncalı caddesi <br />
              no:ı6
            </p>
            <p>Konyaaltı/Antalya</p>
          </address>
        </div>
        <footer>Copyright ©2021 Created by Batuhan Erdogmus</footer>
      </StyledFooter>
    </>
  );
};

export default Footer;
