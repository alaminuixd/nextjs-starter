import Link from "next/link";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex gap-5 py-4 border-b-1 max-w-7xl mx-auto">
        <Link href={"/products/1"}>Product 1</Link>
        <Link href={"/products/2"}>Product 2</Link>
        <Link href={"/products/3"} replace>
          Product 3
        </Link>
      </div>
      {children}
    </>
  );
}
