export const metadata = {
  title: "Our products",
  description: "Developed by Al Amin",
};

export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <h3>Feature Products</h3>
    </>
  );
}
