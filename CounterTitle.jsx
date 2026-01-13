import React, { memo } from "react";

function CounterTitle({ value }) {
  console.log(" i am couner title page");
  return <p>The value of the counter is {value}</p>;
}

export default memo(CounterTitle);
