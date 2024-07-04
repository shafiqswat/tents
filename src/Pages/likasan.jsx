/** @format */

import React from "react";
import likasanItem from "../Components/assets/Likasan";
import CardComponent from "../Components/layout/Card";

function Likasan() {
  return (
    <div>
      {likasanItem.map((item, index) => {
        <CardComponent
          key={index}
          item={item}
        />;
      })}
    </div>
  );
}

export default Likasan;
