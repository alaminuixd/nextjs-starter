"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function Auth() {
  const pathName = usePathname();
  console.log(pathName);
  const [input, setInput] = useState("");
  return (
    <div className="max-w-5xl mx-auto">
      <div className="my-10">
        <label htmlFor="templateSearch">From Template</label>
        <input
          name="templateSearch"
          className="w-full border px-7 py-3 rounded-full"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="But template state value resets on URL change"
        />
      </div>
      <div className="flex gap-5 py-5">
        {navLinks &&
          navLinks.length > 0 &&
          navLinks.map((navLink) => {
            const isActive =
              navLink.href === pathName ||
              (pathName.startsWith(navLink.href) && navLink.href !== "/");
            // const isActive = pathName === navLink.href
            return (
              <Link
                key={navLink.name}
                href={navLink.href}
                className={`${isActive && "font-bold text-blue-600"}`}
              >
                {navLink.name}
              </Link>
            );
          })}
      </div>
    </div>
  );
}
