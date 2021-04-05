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
import { useState } from "react";
import API from "../components/constant";

export default function About() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [tel, setTel] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  async function addMessage() {
    const messageInfos = {
      name: name,
      mail: mail,
      no: tel,
      address: address,
      message: message,
    };

    const add = await fetch(`${API}/submits`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(messageInfos),
    });

    console.log(messageInfos);
    const addResponse = await add;

    if (addResponse.ok) {
      setName(""), setTel(""), setMessage(""), setAddress("");
      alert(
        "Mesajınız başarı ile iletilmiştir, en yakın zamanda size geri dönüş sağlayacağız."
      );
    } else {
      alert("Bir hata oluştu, lütfen formu kontrol ediniz.");
    }

    console.log(addResponse.status);
  }
  return (
    <Layout>
      <Head>
        <title>Hakkımda</title>
      </Head>
      <StyledAboutPage>
        <div className="background" id="about"></div>
        <div className="container">
          <div className="description">
            <h1>Meral EGEMEN Kimdir?</h1>
            <p>
              Meral EGEMEN 2005 yılından bu yana inşaat ve gayrimenkul
              sektöründe çalışmakta olup, 2020 den itibaren kariyerine Realty
              World Yıldız Gayrimenkul'de devam etmektedir.
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
                <h2>Bürokratik İşlemler</h2>
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
                  <input
                    type="text"
                    autoComplete="off"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                  <label>İsminiz</label>
                </div>
                <div className="input-box">
                  <input
                    type="email"
                    autoComplete="off"
                    onChange={(e) => setMail(e.target.value)}
                    value={mail}
                  />
                  <label>Mail Adresiniz</label>
                </div>
                <div className="input-box">
                  <input
                    type="tel"
                    autoComplete="off"
                    onChange={(e) => setTel(e.target.value)}
                    value={tel}
                  />
                  <label>Telefon no</label>
                </div>
                <div className="input-box">
                  <input
                    type="text"
                    autoComplete="off"
                    onChange={(e) => setAddress(e.target.value)}
                    value={address}
                  />
                  <label>
                    Ev Adresi <sup>(opsiyonel)</sup>
                  </label>
                </div>
                <div className="input-box">
                  <input
                    type="text"
                    autoComplete="off"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                  />
                  <label>
                    Mesajınız<sup>(opsiyonel)</sup>
                  </label>
                </div>
                <a onClick={() => addMessage()}>Gönder</a>
              </form>
            </div>
          </div>
        </div>
      </StyledAboutPage>
    </Layout>
  );
}
