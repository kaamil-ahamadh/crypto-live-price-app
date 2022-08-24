import React, { useContext } from "react";
import { CryptoPrice, Pagination, Carousel } from "../components";

import GlobalContext from "../context/GlobalContext";

const HomeScreen = () => {
  const { coins } = useContext(GlobalContext);

  return (
    <div className="screen-wrapper">
      <Carousel />
      {coins.length > 0
        ? coins.map((coin, index) => (
            <div key={index}>
              <CryptoPrice
                marketcapRank={coin.market_cap_rank}
                name={coin.name}
                symbol={coin.symbol}
                image={coin.image}
                price={coin.current_price}
                change={coin.price_change_percentage_24h}
                tradingVolume={coin.total_volume}
                high={coin.high_24h}
                low={coin.low_24h}
                marketCap={coin.market_cap}
              />
            </div>
          ))
        : null}

      {coins ? <Pagination /> : null}
    </div>
  );
};

export default HomeScreen;
