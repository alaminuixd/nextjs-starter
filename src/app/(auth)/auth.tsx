"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function Auth() {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div className="max-w-5xl mx-auto flex gap-5 py-5">
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
  );
}
