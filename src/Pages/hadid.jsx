/** @format */

import React from "react";
import CardComponent from "../Components/layout/Card";
import hadidItem from "../Components/assets/Hadid";
const Hadid = () => {
  return (
    <div>
      {hadidItem.map((item, index) => (
        <CardComponent
          key={index}
          item={item}
        />
      ))}
    </div>
  );
};

export default Hadid;
