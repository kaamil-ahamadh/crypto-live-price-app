import React from "react";

const Footer = () => {
  return (
    <div className="center font-bold m-3">
      <div className="center flex-col">
        <div>
          Powered by &nbsp;
          <a
            href="https://www.coingecko.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-cyan-500"
          >
            CoinGecko
          </a>
        </div>
        <div className="mt-2">
          Made with &#10084; from &nbsp;
          <a
            href="https://github.com/kaamil-ahamadh"
            target="_blank"
            rel="noreferrer noopener"
            className="text-cyan-500 mb-3"
          >
            Kaamil
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
