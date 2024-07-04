/** @format */

import React from "react";
import alriyadItem from "../Components/assets/Alriyad";
import CardComponent from "../Components/layout/Card";

function Alriyad() {
  return (
    <div>
      {alriyadItem.map((item, index) => (
        <CardComponent
          key={index}
          item={item}
        />
      ))}
    </div>
  );
}

export default Alriyad;
