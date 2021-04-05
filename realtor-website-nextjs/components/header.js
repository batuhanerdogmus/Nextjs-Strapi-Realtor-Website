import Link from "next/link";
import picture from "../img/Picture1.jpg";
import { HeaderContainer } from "../styles/StyledIndex";
import API from "./constant";

export default function Header({ user }) {
  return (
    <div>
      {user.assets.map((asset) => (
        <HeaderContainer key={asset.id}>
          <div className="header">
            <h1>HAYALLERİNİ</h1>
            <h2>ERTELEME</h2>
          </div>
          <div className="selection">
            <div className="section-container">
              <div className="section1">
                <div className="section-img">
                  {asset.profileImg.map((img) => (
                    <img
                      style={{ objectFit: "contain" }}
                      key={img.id}
                      src={API + img.formats.small.url}
                      alt=""
                    />
                  ))}
                </div>
                <div className="section-text">
                  <h2>{asset.home}</h2>
                  <p>{asset.aboutdescription}</p>
                  <Link href="/about/#contact">
                    <button>İletişim</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="section-container">
              <div className="section1">
                <div className="section-text">
                  <h2>Birlikte Çalışalım</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi iste fugiat incidunt veniam molestiae. Perferendis
                    architecto sunt, modi maxime laboriosam totam ab praesentium
                    nisi voluptatem. Quo ad accusamus eligendi possimus!
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
    </div>
  );
}
