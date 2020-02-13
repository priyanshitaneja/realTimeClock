import React, {useState} from "react";

function App() {


  let [time, setTime] = useState(new Date().toLocaleTimeString());
  

  function currentTime() {
    return setTime(
      time= new Date().toLocaleTimeString()
      );

  }
  setInterval(currentTime, 1000);

 

  
  return (
    <div className="container">
      <h1>{time}</h1>
      {/* <button onClick={currentTime}></button> */}
    </div>
  );
}

export default App;
