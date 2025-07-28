import { notFound, redirect } from "next/navigation";

const getRandom = (count: number) => {
  return Math.floor(Math.random() * count);
};

export default async function ({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;
  if (parseInt(reviewId) > 100) {
    // notFound();
    redirect("/products");
  }
  const random = getRandom(5);
  if (random === 1) {
    throw new Error("Error loading review");
  }
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
