"use client";

import Nested1 from "@/components/test/Nested1";
import Nested1o from "@/components/test/Nested1o";
import { useState } from "react";

const page = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState(0);

  return (
    <div>
      <h1 className="bg-blue-300">{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increment
      </button>{" "}
      <br />
      <button onClick={() => setMessage(Math.floor(Math.random() * 1000))}>
        Write Message
      </button>
      <Nested1 message={message} />
      <Nested1o />
    </div>
  );
};

export default page;
