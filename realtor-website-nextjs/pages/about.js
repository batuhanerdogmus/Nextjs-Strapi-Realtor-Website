import Head from "next/head";
import Layout from "../components/layout";
import photo from "../img/meral.png";
import chart from "../img/chart.svg";
import key from "../img/key.svg";
import location from "../img/location.svg";
import security from "../img/security.svg";
import share from "../img/share.svg";
import todo from "../img/todo.svg";
import { StyledAboutPage } from "../styles/StyledAbout";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>Hakkımda</title>
      </Head>
      <StyledAboutPage>
        <div className="background"></div>
        <div className="container">
          <div className="description">
            <h1>Neden Meral Egemen?</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur similique modi ipsam, maxime et corrupti quibusdam
              atque iusto possimus, sunt ab magni. Atque tempora nam facilis
              mollitia esse numquam suscipit!
            </p>
          </div>
          <div className="photo">
            <img src={photo} alt="photo" />
          </div>
        </div>
        <div className="services">
          <div className="services-text">
            <h1>Sizin için neler yapıyoruz</h1>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
              sequi ipsum, error qui nihil nemo fugit laborum quibusdam
              repudiandae cumque eius nam totam fugiat accusamus perspiciatis.
              Sunt omnis nulla nesciunt!
            </p>
          </div>
          <div className="card-container">
            <div className="card">
              <img
                src={`https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80`}
                alt="office photo"
              />
              <div className="card-text">
                <h2>Gayrimenkul Expertiz</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Magnam illum suscipit reprehenderit voluptatem possimus culpa
                  vel earum repudiandae corrupti, delectus inventore. Eligendi
                  odio a voluptas velit fuga laborum asperiores nobis?
                </p>
              </div>
            </div>
            <div className="card">
              <img
                src={`https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80`}
                alt="office photo"
              />
              <div className="card-text">
                <h2>Gayrimenkul Portföy yönetimi</h2>

                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Magnam illum suscipit reprehenderit voluptatem possimus culpa
                  vel earum repudiandae corrupti, delectus inventore. Eligendi
                  odio a voluptas velit fuga laborum asperiores nobis?
                </p>
              </div>
            </div>
            <div className="card">
              <img
                src={`https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80`}
                alt="office photo"
              />
              <div className="card-text">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Magnam illum suscipit reprehenderit voluptatem possimus culpa
                  vel earum repudiandae corrupti, delectus inventore. Eligendi
                  odio a voluptas velit fuga laborum asperiores nobis?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="gain">
          <div className="gain-container">
            <h1>Neden Biz?</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              delectus velit excepturi voluptate laboriosam, facere odio
              perferendis eum, tempora, provident dignissimos unde reiciendis
              labore vel porro praesentium quo deserunt? Harum!
            </p>
            <h2>Önceliğimiz sizsiniz</h2>
          </div>
        </div>
        <div className="risks">
          <div className="risks-text">
            <h1>Sizi Koruduğumuz Riskler</h1>
          </div>
          <div className="risks-card-container">
            <div className="risks-card">
              <img src={chart} alt="office photo" />
              <div className="risks-card-text">
                <h2>Gayrimenkul Expertiz</h2>
                <p>
                  Sizin için günümüzün güncel piyasa koşullarındaki en uygun
                  fiyatı buluyoruz.
                </p>
              </div>
            </div>
            <div className="risks-card">
              <img src={key} alt="office photo" />
              <div className="risks-card-text">
                <h2>Güvenlik</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quasi magnam quos iure, id amet possimus obcaecati saepe
                  labore ut velit minima similique, soluta inventore ullam atque
                  eius, cupiditate enim molestiae!
                </p>
              </div>
            </div>
            <div className="risks-card">
              <img src={location} alt="office photo" />
              <div className="risks-card-text">
                <h2>Gayrimenkul Expertiz</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Magnam illum suscipit reprehenderit voluptatem possimus culpa
                  vel earum repudiandae corrupti, delectus inventore. Eligendi
                  odio a voluptas velit fuga laborum asperiores nobis?
                </p>
              </div>
            </div>
            <div className="risks-card">
              <img src={security} alt="office photo" />
              <div className="risks-card-text">
                <h2>Güvenlik</h2>
                <p>
                  Evinizin kapısını kime açıyor olabileceğinizi hiç düşündünüz
                  mü? Sizin ve ailenizin güvenliği için evinize gelen herkesin
                  kayıdını tutuyoruz.
                </p>
              </div>
            </div>
            <div className="risks-card">
              <img src={share} alt="office photo" />
              <div className="risks-card-text">
                <h2>Pazarlama Planı</h2>
                <p>
                  Gerçek alıcılara ulaşmak için özel pazarlama planı
                  oluşturuyoruz.
                </p>
              </div>
            </div>
            <div className="risks-card">
              <img src={todo} alt="office photo" />
              <div className="risks-card-text">
                <h2>Brokratik İşlemler</h2>
                <p>
                  Satış sırasında ve sonrasındaki tüm bürokratik işlemleri sizin
                  için eksiksiz bir şekilde yürütüyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact">
          <h1>Bize Ulaşın</h1>

          <div className="contact-container" id="contact">
            <div className="img">
              <img
                src={
                  "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }
                alt="contact image"
              />
            </div>
            <div className="contact-form">
              <form action="#" className="form">
                <div className="input-box">
                  <input type="text" name="" autoComplete="off" />
                  <label>Name</label>
                </div>
                <div className="input-box">
                  <input type="email" name="" autoComplete="off" />
                  <label>Email</label>
                </div>
                <div className="input-box">
                  <input type="tel" name="" autoComplete="off" />
                  <label>Phone</label>
                </div>
                <div className="input-box">
                  <input type="text" name="" autoComplete="off" />
                  <label>Home Address</label>
                </div>
                <div className="input-box">
                  <input type="text" name="" autoComplete="off" />
                  <label>Message</label>
                </div>
                <a href="#">Submit</a>
              </form>
            </div>
          </div>
        </div>
      </StyledAboutPage>
    </Layout>
  );
}
