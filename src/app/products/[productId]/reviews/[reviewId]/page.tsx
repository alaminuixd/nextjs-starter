export default async function ({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;
  return (
    <div>
      <h2>
        Showing Product {productId} and review {reviewId}{" "}
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        labore quaerat eius totam iusto, cum dolorum numquam sit, ipsam laborum,
        sed delectus incidunt est accusantium nulla. Consectetur voluptate eius
        officia!
      </p>
    </div>
  );
}
