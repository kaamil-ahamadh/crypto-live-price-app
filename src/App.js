import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import { Header, Footer, Loading } from "./components";
import GlobalContext from "./context/GlobalContext";
import HomeScreen from "./screens/HomeScreen";
import ErrorScreen from "./screens/ErrorScreen";

function App() {
  const [coins, setCoins] = useState({});
  const [trendingCoins, setTrendingCoins] = useState({});
  const [curPage, setCurPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    handleLoadCoins(1);

    setTimeout(() => {
      if (coins) {
        setLoading(false);
      }
    }, 1000);
  }, []);

  const handleLoadCoins = async (pageNumber) => {
    setCoins({});
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=${pageNumber}&sparkline=false`
      );

      setCoins(response.data);

      const responseTrendingCoins = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=gecko_desc&per_page=25&page=1&sparkline=false&price_change_percentage=24h"
      );
      setTrendingCoins(responseTrendingCoins.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return (
      <div className="app-wrapper">
        <Loading />
      </div>
    );
  }
  return (
    <div className="app-wrapper">
      <GlobalContext.Provider
        value={{
          coins,
          setCoins,
          handleLoadCoins,
          curPage,
          setCurPage,
          trendingCoins,
          setTrendingCoins,
        }}
      >
        <Header />
        <div>
          <div className="screen-wrapper">
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="*" element={<ErrorScreen />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
