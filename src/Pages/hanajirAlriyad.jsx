/** @format */

import React from "react";
import hanajirItem from "../Components/assets/HanajirAlriyad";
import CardComponent from "../Components/layout/Card";

function HanajirAlriyad() {
  return (
    <div>
      {hanajirItem.map((item, index) => (
        <CardComponent
          key={index}
          item={item}
        />
      ))}
    </div>
  );
}

export default HanajirAlriyad;
