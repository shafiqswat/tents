/** @format */

import React from "react";
import manatiqItem from "../Components/assets/ManatiqAlsueudia";
import CardComponent from "../Components/layout/Card";

function ManatiqAlsueudia() {
  return (
    <div>
      {manatiqItem.map((item, index) => (
        <CardComponent
          item={item}
          key={index}
        />
      ))}
    </div>
  );
}

export default ManatiqAlsueudia;
