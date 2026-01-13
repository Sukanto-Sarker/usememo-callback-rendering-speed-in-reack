import React, { memo } from "react";

function Button({ handeler, Title }) {
  console.log("i am btn page");
  return <button onClick={handeler}>increase by {Title}</button>;
}

export default memo(Button);
