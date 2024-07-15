import { memo, useMemo } from "react";
import Nested2 from "./Nested2";

const Nested1 = ({ message }: { message: number }) => {
  console.log("Nested1");

  const result2 = useMemo(() => {
    let result = 0;
    for (let i = 0; i < 599999990; i++) {
      result += i;
    }

    return result;
  }, []);

  return (
    <div>
      {message}: {result2}
      <Nested2 />
    </div>
  );
};

export default memo(Nested1);
