import React from "react";

const Hour = ({ hours }) => {
  console.log("hours rendered");
  return <h1> {hours} </h1>;
};

export default React.memo(Hour);
