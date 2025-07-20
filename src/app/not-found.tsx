"use client";
import "./css-default/not-found.css";
import { usePathname } from "next/navigation";
// not-found page doesn't except any props
// to show something different we need to rely on "usePathname" hook
export default function NotFound() {
  const pathName = usePathname();
  console.log(pathName);
  const productId = pathName.split("/")[2];
  const reviewId = pathName.split("/")[4];
  console.log(productId);
  console.log(reviewId);
  return (
    <div className="text-center">
      <div style={{ fontSize: "100px" }}>😢</div>
      <h1>Not Found!</h1>
      <p>The page you are looking for is not found.</p>
    </div>
  );
}
