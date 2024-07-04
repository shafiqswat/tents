/** @format */

import React from "react";
import BreadCrumb from "../Components/BreadCrumb";
import hadayiqItem from "../Components/assets/Hadayiq";
import CardComponent from "../Components/layout/Card";

function Hadayiq() {
  return (
    <div>
      {hadayiqItem.map((item, index) => (
        <CardComponent
          key={index}
          item={item}
        />
      ))}
    </div>
  );
}

export default Hadayiq;
