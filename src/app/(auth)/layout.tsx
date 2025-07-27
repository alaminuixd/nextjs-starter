"use client";
import { useState } from "react";
import RootTemplate from "./template";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [input, setInput] = useState("");
  return (
    <div className="max-w-6xl mx-auto">
      <div className="my-10">
        <label htmlFor="searchInput">From Layout</label>
        <input
          name="searchInput"
          className="w-full border px-7 py-3 rounded-full"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your value"
        />
      </div>
      {children}
    </div>
  );
}
