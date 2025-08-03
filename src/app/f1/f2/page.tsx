import Link from "next/link";
export default function F2() {
  return (
    <div>
      <h1>Folder 2 page</h1>
      <div className="flex gap-5">
        <Link href={"/f1"}>F2</Link>
        <Link href={"/f5"}>F5</Link>
      </div>
    </div>
  );
}
