import Link from "next/link";
export default function F2() {
  return (
    <div>
      <h1>Folder 2 page</h1>
      <div>
        <Link href={"/f1"}>F2</Link>
      </div>
    </div>
  );
}
