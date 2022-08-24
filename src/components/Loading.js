import React from "react";
import { Grid } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="loading-wrapper">
      <Grid color="#00BFFF" width={80} height={80} />
      <div className="text-[#00BFFF] mt-6 font-bold text-2xl">
        Crypto Price App
      </div>
    </div>
  );
};

export default Loading;
