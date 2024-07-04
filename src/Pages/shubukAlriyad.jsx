/** @format */

import React from "react";
import shubukItem from "../Components/assets/ShubukAlriyad";
import CardComponent from "../Components/layout/Card";

function ShubukAlriyad() {
  return (
    <div>
      {shubukItem.map((item, index) => (
        <CardComponent
          key={index}
          item={item}
        />
      ))}
    </div>
  );
}

export default ShubukAlriyad;
