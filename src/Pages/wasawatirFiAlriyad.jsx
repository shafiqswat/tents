/** @format */

import React from "react";
import wasawatirItem from "../Components/assets/WasawatirFiAlriyad";
import CardComponent from "../Components/layout/Card";

function WasawatirFiAlriyad() {
  return (
    <div>
      {wasawatirItem.map((item, index) => (
        <CardComponent
          key={index}
          item={item}
        />
      ))}
    </div>
  );
}

export default WasawatirFiAlriyad;
