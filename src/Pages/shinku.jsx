/** @format */

import React from "react";
import shinkuItem from "../Components/assets/Shinku";
import CardComponent from "../Components/layout/Card";

function Shinku() {
  return (
    <div>
      {shinkuItem.map((item, index) => {
        <CardComponent
          key={index}
          item={item}
        />;
      })}
    </div>
  );
}

export default Shinku;
