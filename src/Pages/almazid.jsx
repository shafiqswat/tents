/** @format */

import React from "react";
import almazidItem from "../Components/assets/Almazid";
import CardComponent from "../Components/layout/Card";

function Almazid() {
  return (
    <div>
      {almazidItem.map((item, index) => {
        <CardComponent
          key={index}
          item={item}
        />;
      })}
    </div>
  );
}

export default Almazid;
