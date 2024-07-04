/** @format */

import React from "react";
import bilastikItem from "../Components/assets/Bilastik";
import CardComponent from "../Components/layout/Card";

function Bilastik() {
  return (
    <div>
      {bilastikItem.map((item, index) => (
        <CardComponent
          key={index}
          item={item}
        />
      ))}
    </div>
  );
}

export default Bilastik;
