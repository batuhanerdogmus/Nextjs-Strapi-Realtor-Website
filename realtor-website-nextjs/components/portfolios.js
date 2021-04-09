import { StyledPortfolios, SectionStyled } from "../styles/StyledPortfolio";
import { useState } from "react";
import Link from "next/link";
import slug from "slug";
import Image from "next/image";
import searchIcon from "../img/searchIcon.svg";

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
  const [roomFilter, setRoomFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [showFilter, setShowFilter] = useState(false);

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

  const SelectOnClickHandler = (e) => {
    if (e.target.value === "Oda Sayısı") {
      setRoomFilter(null);
    } else {
      setRoomFilter(e.target.value.split(" ")[0]);
    }
  };
  const TypeOnClickHandler = (e) => {
    if (e.target.value === "Konut Tipi") {
      setTypeFilter(null);
    } else {
      setTypeFilter(e.target.value.split(" ")[0]);
    }
  };
  const filteredByType = typeFilter
    ? orderedPortfolios.filter((portfolio) => portfolio.type === typeFilter)
    : orderedPortfolios;

  const filteredByRoom = roomFilter
    ? filteredByType.filter((portfolio) => portfolio.room === roomFilter)
    : filteredByType;

  const showFilterHandler = () => {
    setShowFilter(!showFilter);
  };

  const currencyFormat = (num) => {
    return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + "TL";
  };

  const types = portfolio.map((portfolio) => portfolio.type);
  const fiterdTypes = filteredByRoom.map((portfolio) => portfolio.type);
  const uniqueTypes = [...new Set(types)];

  const roomTypes = portfolio.map((portfolio) => portfolio.room);
  const filtrdRoomTypes = filteredByRoom.map((portfolio) => portfolio.room);
  const uniqueRoomTypes = [...new Set(roomTypes)];

  return (
    <div>
      <SectionStyled>
        <h4 className="filter" onClick={showFilterHandler}>
          Filter
        </h4>

        <div className={`container ${showFilter ? "active" : ""}`}>
          <div className="filter-container">
            <div className="box-container">
              <div className="searchIcon">
                <Image
                  src={searchIcon}
                  alt="searchIcon icon"
                  width={20}
                  height={20}
                />
              </div>
              <input placeholder="Bölge arayın" onChange={onInputChange} />
            </div>
            <div className="box-container" onClick={SelectOnClickHandler}>
              <select className="room" id="room">
                <option>Oda Sayısı</option>
                {uniqueRoomTypes.map((roomType) => (
                  <option key={roomType} onClick={SelectOnClickHandler}>
                    {roomType} (
                    {
                      (!roomFilter ? filtrdRoomTypes : roomTypes).filter(
                        (roomTypes) => roomTypes === roomType
                      ).length
                    }
                    )
                  </option>
                ))}
              </select>
            </div>
            <div className="box-container" onClick={TypeOnClickHandler}>
              <select className="type" id="type">
                <option>Konut Tipi</option>
                {uniqueTypes.map((type) => (
                  <option key={type} onClick={TypeOnClickHandler}>
                    {type} (
                    {
                      (!typeFilter ? fiterdTypes : types).filter(
                        (types) => types === type
                      ).length
                    }
                    )
                  </option>
                ))}
              </select>
            </div>
            <div className="box-container" onClick={orderHandler}>
              <button>
                Fiyata Göre Sırala
                <SortArrow direction={direction} />
              </button>
            </div>
          </div>
        </div>
      </SectionStyled>
      <StyledPortfolios>
        {filteredByRoom.map((portfolio) => (
          <Link
            href={`/portfolios/${slug(portfolio.title)}-${portfolio.id}`}
            key={portfolio.id}
          >
            <div
              className="container"
              style={{ display: portfolio.onsale ? "flex" : "none" }}
            >
              <div className="card-container">
                <img
                  src={portfolio.photos[0].formats.medium.url}
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
            </div>
          </Link>
        ))}

        <div
          className="error"
          style={{ display: filteredByRoom.length <= 0 ? "block" : "none" }}
        >
          <h1>Aradığınız Kriterlere Uygun Sonuç Bulunamadı</h1>
        </div>
      </StyledPortfolios>
    </div>
  );
};

export default Portfolios;
