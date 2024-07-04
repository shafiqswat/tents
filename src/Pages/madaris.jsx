/** @format */

import React from "react";
import madarisItem from "../Components/assets/Madaris";
import CardComponent from "../Components/layout/Card";

function Madaris() {
  return (
    <div>
      {madarisItem.map((item, index) => {
        <CardComponent
          key={index}
          item={item}
        />;
      })}
    </div>
  );
}

export default Madaris;
