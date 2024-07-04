/** @format */

import React from "react";
import jalasatItem from "../Components/assets/JalasatWaburjulat";
import CardComponent from "../Components/layout/Card";

function JalasatWaburjulat() {
  return (
    <div>
      {jalasatItem.map((item, index) => (
        <CardComponent
          key={index}
          item={item}
        />
      ))}
    </div>
  );
}

export default JalasatWaburjulat;
