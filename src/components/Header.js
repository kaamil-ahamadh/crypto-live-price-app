import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Search from "./Search";
import GlobalContext from "../context/GlobalContext";

const Header = () => {
  const { handleLoadCoins } = useContext(GlobalContext);

  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="header-container">
        <div
          onClick={() => {
            handleLoadCoins(1);
            navigate("/");
          }}
          className="header-title hover:text-blue-400"
        >
          Crypto Price App
        </div>
        <div>
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Header;
