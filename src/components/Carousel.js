import React, { useContext } from "react";
import millify from "millify";
import AliceCarousel from "react-alice-carousel";

import GlobalContext from "../context/GlobalContext";

const responsive = {
  0: {
    items: 2,
  },
  512: {
    items: 4,
  },
};

const Carousel = () => {
  const { trendingCoins } = useContext(GlobalContext);

  if (!trendingCoins.length > 0) {
    return;
  }

  return (
    <div className="mb-2 sm:mb-10">
      <AliceCarousel
        mouseTracking
        infinite
        autoPlay
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={trendingCoins.map((coin, index) => {
          return (
            <div className="center flex-col gap-2">
              <div className="text-center font-bold">
                {coin.name} ({coin.symbol.toUpperCase()})
              </div>
              <div className="mt-2">
                <img src={coin.image} alt={coin.name} height={50} width={50} />
              </div>
              <div className="text-center">
                $ {coin.current_price}
                <div
                  className={
                    coin.price_change_percentage_24h >= 0
                      ? "text-green-500 flex center"
                      : "text-red-500 flex center"
                  }
                >
                  (
                  {millify(coin.price_change_percentage_24h, {
                    precision: 2,
                  })}
                  %)
                </div>
              </div>
            </div>
          );
        })}
      />
    </div>
  );
};

export default Carousel;
