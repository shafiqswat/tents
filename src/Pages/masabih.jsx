/** @format */

import React from "react";
import masabihItem from "../Components/assets/Masabih";
import CardComponent from "../Components/layout/Card";

function Masabih() {
  return (
    <div>
      {masabihItem.map((item, index) => {
        <CardComponent
          key={index}
          item={item}
        />;
      })}
    </div>
  );
}

export default Masabih;
