import React from "react";

const Minute = ({ min }) => {
  console.log("min rendered");
  return <h1> {min} </h1>;
};

export default React.memo(Minute);
