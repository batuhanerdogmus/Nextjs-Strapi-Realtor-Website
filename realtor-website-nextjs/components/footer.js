import styled from "styled-components";

const StyledFooter = styled.div`
  width: 100%;
  text-transform: capitalize;
  color: var(--text-color);
  background-color: var(--background-color-dark);
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: center;
  li {
    list-style: none;
    display: inline-block;
  }
`;
const Footer = () => {
  return (
    <div>
      <StyledFooter>
        <div>
          <ul>
            <li>
              <p>facebook</p>
            </li>
            <li>
              <p>facebook</p>
            </li>
            <li>
              <p>facebook</p>
            </li>
            <p>Sosyal Medya İle Takipte Kalın</p>
          </ul>
        </div>
        <div>
          <address>
            <p>
              tel: +90 537 245 5007 <br />
              uncalı caddesi <br />
              no:ı6
            </p>
            <p>RealtyWorld Yıldız Gayrimenkul</p>
            Antalya/Konyaaltı
          </address>{" "}
        </div>
      </StyledFooter>
      <footer style={{ textAlign: "center" }}>design by BatuhanErdogmus</footer>
    </div>
  );
};

export default Footer;
