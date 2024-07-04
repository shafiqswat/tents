/** @format */

import React from "react";
import BreadCrumb from "../Components/BreadCrumb";
import sayaaratItem from "../Components/assets/Sayaarat";
import CardComponent from "../Components/layout/Card";
function Sayaarat() {
  return (
    <div>
      {sayaaratItem.map((item, index) => (
        <CardComponent
          key={index}
          item={item}
        />
      ))}
    </div>
  );
}

export default Sayaarat;
