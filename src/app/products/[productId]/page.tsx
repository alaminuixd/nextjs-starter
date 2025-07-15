export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;
  console.log(`The params is : ${params}`);
  return (
    <div>
      <h1>Showing Product for {productId}</h1>
    </div>
  );
}
