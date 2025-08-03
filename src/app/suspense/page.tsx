import CustomSuspense from "./suspense";
import CustomSuspenseTwo from "./suspense-two";
import { Suspense } from "react";
export default async function Home() {
  return (
    <div className="flex gap-5">
      <CustomSuspense />
      <CustomSuspenseTwo />
    </div>
  );
}
