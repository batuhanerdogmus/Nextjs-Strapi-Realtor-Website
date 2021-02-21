import { StyledPortfolios, SectionStyled } from "../styles/StyledPortfolio";
import { useState } from "react";
import Link from "next/link";

const orderByPrice = (portfolio, direction) => {
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
      <svg
        style={{ transform: " translate(4px, 1px)" }}
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 24 24"
      >
        <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
      </svg>
    );
  } else {
    return (
      <svg
        style={{ transform: "rotate(180deg) translate(-4px, -1px)" }}
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 24 24"
      >
        <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
      </svg>
    );
  }
};

const Portfolios = ({ portfolio, setKeyWord }) => {
  const [direction, setDirection] = useState(null);

  const orderedPortfolios = orderByPrice(portfolio, direction);

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

  const [roomFilter, setRoomFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  const SelectOnClickHandler = (e) => {
    if (e.target.value === "Oda Sayısı") {
      setRoomFilter(null);
    } else {
      setRoomFilter(e.target.value);
    }
  };
  const TypeOnClickHandler = (e) => {
    if (e.target.value === "Konut Tipi") {
      setTypeFilter(null);
    } else {
      setTypeFilter(e.target.value);
    }
  };
  const filterdByType = typeFilter
    ? orderedPortfolios.filter((portfolio) => portfolio.type === typeFilter)
    : orderedPortfolios;

  const filterdByRoom = roomFilter
    ? filterdByType.filter((portfolio) => portfolio.room === roomFilter)
    : filterdByType;

  return (
    <div>
      <SectionStyled>
        <div className="container">
          <div className="box-container">
            <svg
              className="searchIcon"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z"></path>
            </svg>
            <input placeholder="Bölge arayın" onChange={onInputChange} />
          </div>
          <div className="box-container" onClick={SelectOnClickHandler}>
            <select className="room" id="room">
              <option>Oda Sayısı</option>
              <option>1+1</option>
              <option>2+1</option>
              <option>3+1</option>
              <option>4+1</option>
            </select>
          </div>
          <div className="box-container" onClick={TypeOnClickHandler}>
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
      <StyledPortfolios>
        {filterdByRoom.map((portfolio) => (
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
      </StyledPortfolios>
    </div>
  );
};

export default Portfolios;
