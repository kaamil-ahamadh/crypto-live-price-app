import React, { useContext, useState } from "react";

import GlobalContext from "../context/GlobalContext";

const Pagination = () => {
  const { handleLoadCoins, curPage, setCurPage } = useContext(GlobalContext);

  const [pages, setPages] = useState([1, 2, 3, 4, 5]);
  const handlePageNumber = (number) => {
    handleLoadCoins(number);
    setCurPage(number);
    window.scroll(0, 0);
  };

  return (
    <div className="flex flex-col center">
      <div className="mb-3">
        Showing {curPage * 50 - 49} to {curPage * 50} of 3500 Cryptos
      </div>
      <ul className="inline-flex items-center -space-x-px">
        <li>
          <div
            className="pagination-icon ml-0 rounded-l-lg"
            onClick={() => {
              if (pages[0] >= 6) {
                setPages([
                  pages[0] - 5,
                  pages[1] - 5,
                  pages[2] - 5,
                  pages[3] - 5,
                  pages[4] - 5,
                ]);
              }
            }}
          >
            <span className="sr-only">Previous</span>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </li>

        {pages
          ? pages.map((page, index) => {
              return (
                <li
                  className={`pagination-item ${
                    curPage === page ? "bg-gray-700" : "bg-[#000D26]"
                  }`}
                  onClick={() => handlePageNumber(page)}
                  key={index}
                >
                  {page}
                </li>
              );
            })
          : null}

        <li>
          <div
            onClick={() => {
              if (pages[4] <= 65) {
                setPages([
                  pages[0] + 5,
                  pages[1] + 5,
                  pages[2] + 5,
                  pages[3] + 5,
                  pages[4] + 5,
                ]);
              }
            }}
            className="pagination-icon rounded-r-lg"
          >
            <span className="sr-only">Next</span>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
