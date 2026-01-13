import React, { useState, useCallback,useMemo } from "react";
import Title from "./Title";
import CounterTitle from "./CounterTitle";
import Button from "./Button";

const increaseBY1 = 1;
const increaseBY5 = 5;

export default function App() {
  const [count, setCount] = useState(0);
  const [counter2, setCounter2] = useState(10);

  console.log("App page");

  const incrementHandeler = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  const incrementHandeler2 = useCallback(() => {
    setCounter2(c => c + 5);
  }, []);
  const isEven=useMemo(()=>{
    let i=0;
    while(i<1000000000)i++;

    return count % 2 ===0 ? <p>Count is even</p> : <p>Count is odd</p>
  },[count])
  return (
    <>
      <Title />

      <div>
        <CounterTitle value={count} />
        {isEven}
        <Button handeler={incrementHandeler} Title={increaseBY1} />
      </div>

      <div>
        <CounterTitle value={counter2} />
        <Button handeler={incrementHandeler2} Title={increaseBY5} />
      </div>
    </>
  );
}
