"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Product 1", href: "/products/1" },
  { name: "Product 2", href: "/products/2" },
  { name: "Product 3", href: "/products/3" },
];

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  return (
    <>
      <div className="flex gap-5 py-4 border-b-1 max-w-7xl mx-auto">
        {navLinks &&
          navLinks.length > 0 &&
          navLinks.map((navLink) => {
            const isActive =
              navLink.href === pathName ||
              (pathName.startsWith(navLink.href) && navLink.href !== "/");
            return (
              <Link
                key={navLink.name}
                href={navLink.href}
                className={`${isActive ? "font-bold" : ""}`}
              >
                {navLink.name}
              </Link>
            );
          })}
      </div>
      {children}
    </>
  );
}
