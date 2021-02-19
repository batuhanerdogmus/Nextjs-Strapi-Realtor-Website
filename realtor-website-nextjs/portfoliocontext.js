// import { createContext, useState } from "react";

// export const PortfolioContext = createContext();

// const PortfolioProvider = (props) => {
//   const [portfolio, setPortfolio] = useState([]);
//   const storePortfolio = (portfolio) => {
//     setPortfolio({ portfolio });
//   };
//   console.log(portfolio);

//   return (
//     <PortfolioContext.Provider value={portfolio}>
//       {props.children}
//     </PortfolioContext.Provider>
//   );
// };

// export async function getStaticProps() {
//   const res = await fetch(`http://localhost:1337/portfolios`);
//   const portfolios = await res.json();
//   console.log(portfolios);

//   return {
//     props: { portfolios },
//   };
// }

// export default PortfolioProvider;
