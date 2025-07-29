const getRandom = (count: number) => {
  return Math.floor(Math.random() * count);
};

export const metadata = {
  title: "Our products",
  description: "Developed by Al Amin",
};

export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const randomNum = getRandom(5);
  if (randomNum === 1) {
    throw new Error("Error loading products");
  }
  return (
    <>
      {children}
      <div className="max-w-5xl mx-auto mb-5">
        <h3 className="text-center text-2xl mt-5">Feature Products</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
          doloribus impedit earum voluptatem voluptas fugiat tempora veniam,
          accusantium atque quisquam recusandae at velit deserunt quos ipsa.
          Aliquid accusamus quam quibusdam.
        </p>
      </div>
    </>
  );
}
