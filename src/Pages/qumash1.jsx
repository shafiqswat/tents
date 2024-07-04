/** @format */

import React from "react";
import qumash1Item from "../Components/assets/Qumash1";
import CardComponent from "../Components/layout/Card";

function Qumash1() {
  return (
    <div>
      {qumash1Item.map((item, index) => (
        <CardComponent
          item={item}
          key={index}
        />
      ))}
    </div>
  );
}

export default Qumash1;
