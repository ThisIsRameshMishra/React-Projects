import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();

  const [hour, setHour] = useState(h);
  const [minute, setMinute] = useState(m);
  const [second, setSecond] = useState(s);

  const getTime = () => {
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    setHour(h);
    setMinute(m);
    setSecond(s);
  };

  const IncNum = () => {
    setCount(count + 1);
  };
  const DecNum = () => {
    setCount(count - 1);
  };
  const Reset = () => {
    setCount(0);
  };
  return (
    <>
      <h2>{count}</h2>

      <button onClick={IncNum}>Increment</button>
      <button onClick={DecNum}>Decrement</button>
      <button onClick={Reset}>Reset</button>
      <h1>
        {hour}:{minute}:{second}
      </h1>
      <button onClick={getTime}>getTime</button>
    </>
  );
};
export default App;
