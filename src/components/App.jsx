import React from "react";
import Clock from "./Clock";
import Optimization from "./Optimization";

function App() {
  console.log("App rendered");

  return (
    <div className="container">
      <Clock />
      <Optimization />
    </div>
  );
}

export default App;
