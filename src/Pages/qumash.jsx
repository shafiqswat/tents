/** @format */

import React from "react";
import qumashItem from "../Components/assets/Qumash";
import CardComponent from "../Components/layout/Card";

function Qumash() {
  return (
    <div>
      {qumashItem.map((item, index) => {
        <CardComponent
          key={index}
          item={item}
        />;
      })}
    </div>
  );
}

export default Qumash;
