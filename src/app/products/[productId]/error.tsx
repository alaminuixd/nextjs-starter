"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

type ErrorType = {
  error: Error;
  reset: () => void;
};
export default function ErrorBoundary({ error, reset }: ErrorType) {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };
  return (
    <div className="text-center bg-red-600 text-white py-10">
      <h2 className="text-2xl">{error.message}</h2>
      <button onClick={reload} className="mt-5 btn-primary">
        Try Again
      </button>
    </div>
  );
}
