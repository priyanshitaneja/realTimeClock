import React from "react";

const Seconds = ({ sec }) => {
  console.log("sec rendered");
  return <h1> {sec} </h1>;
};

export default React.memo(Seconds);
