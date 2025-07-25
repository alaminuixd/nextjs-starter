"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import ConfirmBox from "./confirmBox";

export default function OrderProduct() {
  const [confirm, setConfirm] = useState(false);
  const router = useRouter();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Placing your order");
    setConfirm(true);
    setTimeout(() => {
      setConfirm(false);
      router.push("/");
      //router.replace("/");
      //router.forward();
      //router.back()
    }, 3000);
  };
  return (
    <div className="max-w-7xl mx-auto my-10 text-center">
      {confirm && <ConfirmBox />}
      <h1 className="mb-5">Order Product</h1>
      <button type="button" onClick={handleClick} className="btn-paimary">
        Place Order
      </button>
    </div>
  );
}
