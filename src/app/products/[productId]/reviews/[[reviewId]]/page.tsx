/* import { notFound } from "next/navigation";
export default async function ReviewDetails({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;
  parseInt(reviewId) > 1000 && notFound();
  return (
    <div>
      <h1>
        Showing review {reviewId} for product {productId}
      </h1>
    </div>
  );
}
 */

import { notFound } from "next/navigation";
export default async function ProductReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;
  return (
    <div>
      <h3>
        Showing product for {productId} and review for {reviewId}
      </h3>
    </div>
  );
}
