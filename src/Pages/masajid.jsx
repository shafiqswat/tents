/** @format */

import React from "react";
import masajidItem from "../Components/assets/Masajid";
import CardComponent from "../Components/layout/Card";

function Masajid() {
  return (
    <div>
      {masajidItem.map((item, index) => {
        <CardComponent
          key={index}
          item={item}
        />;
      })}
    </div>
  );
}

export default Masajid;
