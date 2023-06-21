import React from "react";

const Hour = ({ hours }) => {
  console.log("hours rendered");
  return <h1> {hours.toString().padStart(2, '0')} </h1>;
};

export default React.memo(Hour);
