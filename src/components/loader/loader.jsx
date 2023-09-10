import React from "react";
import { Circles } from "react-loader-spinner";

const LoaderSpinner = () => {
  return (
    <div className="loader-container">
      <Circles
        height="80"
        width="80"
        color="#b200b8"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default LoaderSpinner;
