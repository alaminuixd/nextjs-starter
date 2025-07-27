"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ConfirmBox from "./confirmBox";

export default function OrderProduct() {
  const router = useRouter();
  const [showConfirmBox, setShowConfirmBox] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const handlePlaceOrder = () => {
    setShowConfirmBox(true);
  };

  useEffect(() => {
    console.log("placing your order");
    confirm && router.push("/");
  }, [confirm]);

  return (
    <div className="max-w-7xl mx-auto my-10 text-center">
      {showConfirmBox && (
        <ConfirmBox
          setConfirm={setConfirm}
          setShowConfirmBox={setShowConfirmBox}
        />
      )}
      <h1 className="mb-5">Order Product</h1>
      <button type="button" className="btn-primary" onClick={handlePlaceOrder}>
        Place Order
      </button>
    </div>
  );
}
