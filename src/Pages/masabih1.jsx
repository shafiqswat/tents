/** @format */

import React from "react";
import masabih1Item from "../Components/assets/Masabih1";
import CardComponent from "../Components/layout/Card";

function Masabih1() {
  return (
    <div>
      {masabih1Item.map((item, index) => (
        <CardComponent
          key={index}
          item={item}
        />
      ))}
    </div>
  );
}

export default Masabih1;
