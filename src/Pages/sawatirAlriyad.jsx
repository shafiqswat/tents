/** @format */

import React from "react";
import sawatriyadItem from "../Components/assets/SawatirAlriyad";
import CardComponent from "../Components/layout/Card";

function SawatirAlriyad() {
  return (
    <div>
      {sawatriyadItem.map((item, index) => (
        <CardComponent
          key={index}
          item={item}
        />
      ))}
    </div>
  );
}

export default SawatirAlriyad;
