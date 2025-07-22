"use client";
import { useState } from "react";
export const Counter = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount((prev) => prev + 1);
  return (
    <div className="text-center py-5 space-y-5">
      <p>Count {count}</p>
      <button
        onClick={handleClick}
        className="bg-blue-600 text-white px-8 py-4 cursor-pointer rounded-full"
      >
        Increment
      </button>
    </div>
  );
};
