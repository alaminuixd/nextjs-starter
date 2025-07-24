import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Blog",
  },
};

export default function Blog() {
  return (
    <div className="text-center py-5 max-w-7xl mx-auto">
      <h1>Our Blog Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et natus nulla
        eveniet accusamus nam deserunt neque, ratione blanditiis nemo temporibus
        maiores ab, dolore quas corporis quisquam labore aperiam commodi.
        Libero.
      </p>
    </div>
  );
}
