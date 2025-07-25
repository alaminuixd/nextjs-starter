import Link from "next/link";

export default function ProductList() {
  return (
    <div className="max-w-7xl mx-auto py-5 text-center">
      <h1>Product Lists</h1>
      <div className="flex justify-between gap-4">
        <div className="bg-gray-100 p-5">
          <h3 className="text-2xl mb-3">Product 1 Title</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
            assumenda sapiente ratione sint possimus est, eum necessitatibus ea
            ipsa voluptatibus ut provident molestiae quos ab maiores tempora
            quae pariatur laborum.
          </p>
        </div>
        <div className="bg-gray-100 p-5">
          <h3 className="text-2xl mb-3">Product 2 Title</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
            assumenda sapiente ratione sint possimus est, eum necessitatibus ea
            ipsa voluptatibus ut provident molestiae quos ab maiores tempora
            quae pariatur laborum.
          </p>
        </div>
        <div className="bg-gray-100 p-5">
          <h3 className="text-2xl mb-3">Product 3 Title</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
            assumenda sapiente ratione sint possimus est, eum necessitatibus ea
            ipsa voluptatibus ut provident molestiae quos ab maiores tempora
            quae pariatur laborum.
          </p>
        </div>
      </div>
    </div>
  );
}
