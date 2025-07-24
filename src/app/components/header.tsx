import Link from "next/link";
export default function Header() {
  return (
    <header className="bg-[lightblue] py-2 text-center flex justify-around">
      <h1>
        <Link href="/">Logo</Link>
      </h1>
      <div className="p-4 flex gap-5">
        <Link href={"/about"}>About</Link>
        <Link href={"/blog"}>Blog</Link>
        <Link href={"/products"}>Product</Link>
      </div>
    </header>
  );
}
