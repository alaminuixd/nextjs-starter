import Link from "next/link";

export default function F1() {
  return (
    <div>
      <h1>Folder 1 page</h1>
      <div className="flex gap-5">
        <Link href={"/f1/f2"}>F2</Link>
        <Link href={"/f3"}>F3</Link>
      </div>
    </div>
  );
}
