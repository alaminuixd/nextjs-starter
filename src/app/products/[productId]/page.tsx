import { Metadata } from "next";
type ProductParams = {
  params: Promise<{ productId: string }>;
};

/* export const generateMetadata = async ({
  params,
}: ProductParams): Promise<Metadata> => {
  const id = (await params).productId;
  const title = await new Promise((resolve) => {
    setTimeout(() => resolve(`iPhone ${id}`), 100);
  });
  return {
    title: `Product ${title}`,
  };
}; */

export const generateMetadata = async ({
  params,
}: ProductParams): Promise<Metadata> => {
  const id = (await params).productId;
  const titleVariation = await new Promise((resolve) => {
    setTimeout(() => resolve(`iPhone ${1}`), 100);
  });
  return {
    title: `Showing ${titleVariation}`,
  };
};

export default async function ProductDetails({ params }: ProductParams) {
  const { productId } = await params;
  return (
    <div>
      <h1>Showing product {productId}</h1>;
    </div>
  );
}
