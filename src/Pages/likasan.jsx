/** @format */

import React from "react";
import likasan1Item from "../Components/assets/Likasan1";
import CardComponent from "../Components/layout/Card";

function Likasan() {
  return (
    <div>
      {likasan1Item.map((item, index) => (
        <CardComponent
          key={index}
          item={item}
        />
      ))}
    </div>
  );
}

export default Likasan;
