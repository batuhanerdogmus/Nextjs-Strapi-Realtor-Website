import { StyledPortfolio, SectionStyled } from "../styles/StyledPortfolio";
import {
  KeyboardArrowDownRounded,
  KeyboardArrowUpRounded,
  Search,
} from "@material-ui/icons";
import { useState } from "react";
import SearchInput from "./searchInput";
import Link from "next/link";

const orderBy = (portfolio, direction) => {
  if (direction === "asc") {
    return [...portfolio].sort((a, b) => a.price - b.price);
  }
  if (direction === "desc") {
    return [...portfolio].sort((a, b) => b.price - a.price);
  } else return [...portfolio].sort((a, b) => b.id - a.id);
};

const SortArrow = ({ direction }) => {
  if (!direction) {
    return <></>;
  }
  if (direction === "desc") {
    return (
      <div>
        <KeyboardArrowDownRounded color="inherit" />
      </div>
    );
  } else {
    return (
      <div>
        <KeyboardArrowUpRounded color="inherit" />
      </div>
    );
  }
};

const Portfolios = ({ portfolio, setKeyWord }) => {
  const [direction, setDirection] = useState(null);

  const orderedPortfolios = orderBy(portfolio, direction);

  const orderHandler = (e) => {
    e.preventDefault();
    if (!direction) {
      setDirection("asc");
    } else if (direction === "asc") {
      setDirection("desc");
    } else return setDirection(null);
  };
  const onInputChange = (e) => {
    setKeyWord(e.target.value.toLowerCase());
  };
  return (
    <div>
      <SectionStyled>
        <div className="container">
          <div className="box-container">
            <Search className="searchIcon" />
            <SearchInput placeholder="Bölge arayın" onChange={onInputChange} />
          </div>
          <div className="box-container">
            <select className="room" id="room">
              <option>Oda Sayısı</option>
              <option>1+1</option>
              <option>2+1</option>
              <option>3+1</option>
              <option>4+1</option>
            </select>
          </div>
          <div className="box-container">
            <select className="type" id="type">
              <option>Konut Tipi</option>
              <option>Apartman</option>
              <option>Site</option>
              <option>Müstakil</option>
            </select>
          </div>
          <div className="box-container" onClick={orderHandler}>
            <button>
              Fiyata Göre Sırala
              <SortArrow direction={direction} />
            </button>
          </div>
        </div>
      </SectionStyled>
      <StyledPortfolio>
        {orderedPortfolios.map((portfolio) => (
          <Link href={`/portfolios/${portfolio.id}`} key={portfolio.id}>
            <div
              className="container"
              style={{ display: portfolio.onsale ? "flex" : "none" }}
            >
              <div className="card-container">
                <img
                  src={
                    "http://localhost:1337" +
                    portfolio.photos[0].formats.large.url
                  }
                  alt={portfolio.description}
                />
                <span></span>
                <h4>{portfolio.title}</h4>
                <p>{portfolio.description}</p>
                <h3>{portfolio.price} TL</h3>
                <h1>MERAL EGEMEN</h1>
              </div>
            </div>
          </Link>
        ))}
      </StyledPortfolio>
    </div>
  );
};

export default Portfolios;
