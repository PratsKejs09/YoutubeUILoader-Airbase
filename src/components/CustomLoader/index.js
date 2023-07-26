import React from "react";
import "../CustomLoader/CustomLoaderStyles.css";

const CustomLoader = (props) => {
  const { style } = props;
  return (
    <div className="skeleton--loader-background" style={{ style }}>
      <div className="skeleton--card-wrapper">
        <div className="skeleton--loader-card"></div>
      </div>
      <div className="skeleton--horizontal-wrapper">
        <div className="skeleton--h1"></div>
        <div className="skeleton--h2"></div>
        <div className="skeleton--h3"></div>
      </div>
    </div>
  );
};
export default CustomLoader;
