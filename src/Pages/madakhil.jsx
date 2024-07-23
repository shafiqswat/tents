/** @format */

import React from "react";
import madakhilItem from "../Components/assets/Madakhil";
import CardComponent from "../Components/layout/Card";

function Madakhil() {
  return (
    <div>
      {madakhilItem.map((item, index) => (
        <CardComponent
          key={index}
          item={item}
        />
      ))}
    </div>
  );
}

export default Madakhil;
