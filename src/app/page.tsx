import Link from "next/link";

export const metadata = {
  title: "The home page",
  description: "This page meta gets pariority",
};
export default function Home() {
  return (
    <div className="p-5">
      <div>
        <Link href={"/about"}>About</Link>
        <Link href={"/blog"}>Blog</Link>
      </div>
      <h1 className="text-center text-3xl">Home Page</h1>
    </div>
  );
}
