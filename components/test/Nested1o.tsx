import { memo } from "react";

const Nested1o = () => {
  console.log("Nested1o");

  return <div></div>;
};

export default memo(Nested1o);
