import "./page.css";
export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;
  function getFirstElement<ElementType>(itemArr: ElementType[]) {
    return itemArr[0];
  }
  console.log(getFirstElement([10, 20, 30, 40]));
  console.log(getFirstElement(["one", "two", "three"]));
  return (
    <div>
      <h1 className="text-center-al">Details for {productId}</h1>
    </div>
  );
}
