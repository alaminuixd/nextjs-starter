import "./page.css";
export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;
  return (
    <div>
      <h1 className="text-center-al">Sowing details for {productId}</h1>
    </div>
  );
}
