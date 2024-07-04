/** @format */

import React from "react";
import biutShaerItem from "../Components/assets/BiutShaer";
import CardComponent from "../Components/layout/Card";

function BiutShaer() {
  return (
    <div>
      {biutShaerItem.map((item, index) => (
        <CardComponent
          key={index}
          item={item}
        />
      ))}
    </div>
  );
}

export default BiutShaer;
