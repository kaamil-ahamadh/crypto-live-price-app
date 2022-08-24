import millify from "millify";
import React from "react";
import {
  BsArrowUpRightCircleFill,
  BsArrowDownRightCircleFill,
} from "react-icons/bs";

const CryptoPrice = ({
  name,
  symbol,
  image,
  price,
  tradingVolume,
  change,
  marketcapRank,
  marketCap,
  high,
  low,
}) => {
  return (
    <div className="center">
      <div className="card ">
        <div className="card-container">
          <div className="center text-center font-bold mb-3">
            {marketcapRank}. {name} ({symbol.toUpperCase()})
          </div>
          <img src={image} alt={name} height={50} width={50} className="mb-5" />
          <div className="center">
            <div className="text-center">
              Price: $ {price}
              <div
                className={
                  change >= 0
                    ? "text-green-500 flex center"
                    : "text-red-500 flex center"
                }
              >
                <div className="mx-1 mb-1">
                  {change >= 0 ? (
                    <BsArrowUpRightCircleFill size={25} />
                  ) : (
                    <BsArrowDownRightCircleFill size={25} />
                  )}
                </div>
                {change ? (
                  <div>
                    (
                    {millify(change, {
                      precision: 2,
                    })}
                    %)
                  </div>
                ) : (
                  <div>0%</div>
                )}
              </div>
            </div>
          </div>
          <div>24H Volume: $ {millify(tradingVolume)}</div>
          <div> 24H High $ {high}</div>
          <div> 24H Low: $ {low}</div>
          <div>Market Cap: $ {millify(marketCap)}</div>
        </div>
      </div>
    </div>
  );
};

export default CryptoPrice;
