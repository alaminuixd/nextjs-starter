import { Counter } from "./counter";

export const metadata = {
  title: "counter",
  description: "A simple counter",
  keywords: ["counter", "simple", "elegant"],
};
export default function CounterPage() {
  return (
    <>
      <Counter />
    </>
  );
}
