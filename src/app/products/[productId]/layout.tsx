export const metadata = {
  title: "Products",
  description: "Product metadata",
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
