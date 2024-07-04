/** @format */

import React from "react";
import aswaqItem from "../Components/assets/Aswaq";
import CardComponent from "../Components/layout/Card";

function Aswaq() {
  return (
    <div>
      {aswaqItem.map((item, index) => {
        <CardComponent
          key={index}
          item={item}
        />;
      })}
    </div>
  );
}

export default Aswaq;
