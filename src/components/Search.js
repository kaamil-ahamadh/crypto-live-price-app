import { useContext, useState } from "react";

import { CgMenuRound, CgCloseO } from "react-icons/cg";
import GlobalContext from "../context/GlobalContext";

const Search = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [userSearch, setUserSearch] = useState("");
  const { coins, setCoins, handleLoadCoins, curPage } =
    useContext(GlobalContext);

  const handleSearch = () => {
    if (userSearch) {
      const newCoins = coins.filter((coin) => {
        return (
          coin.name.toLowerCase().includes(userSearch.toLowerCase()) ||
          coin.symbol.toLowerCase().includes(userSearch.toLowerCase())
        );
      });

      setCoins(newCoins);
    } else if (!userSearch) {
      handleLoadCoins(curPage);
    }
  };

  const handleCancel = () => {
    handleLoadCoins(curPage);
    setUserSearch("");
  };

  return (
    <div className="flex flex-1 justify-start items-center">
      <nav>
        <div
          onClick={() =>
            setIsSearchOpen((prevState) => {
              setIsSearchOpen(!prevState);
              handleCancel();
            })
          }
        >
          {isSearchOpen ? (
            <CgCloseO size={32} color="cyan" />
          ) : (
            <CgMenuRound size={32} color="cyan" />
          )}
        </div>

        {/* Links */}
        <div
          className={`${
            isSearchOpen ? `flex` : `hidden`
          } flex-col p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <div className="center flex-col">
            <div className="mb-2">Search</div>
            <input
              className="input"
              placeholder="Search Coins"
              value={userSearch}
              onChange={(e) => {
                setUserSearch(e.target.value);
                handleSearch();
              }}
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Search;
