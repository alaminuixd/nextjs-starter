import { Metadata } from "next";

/* const getRandom = (count: number) => {
  return Math.floor(Math.random() * count);
}; */

type ProductParams = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({
  params,
}: ProductParams): Promise<Metadata> => {
  const id = (await params).productId;
  const title = await new Promise((resolve) => {
    setTimeout(() => resolve(`iPhone ${id}`), 100);
  });
  return {
    title: `Product ${title}`,
  };
};

export default async function ProductDetails({ params }: ProductParams) {
  const { productId } = await params;
  const productName = await new Promise<string>((resolve) => {
    setTimeout(() => resolve(`iPhone ${productId}`), 100);
  });

  /*   const randomNum = getRandom(5);
  if (randomNum === 1) {
    throw new Error("Error loading products");
  } */

  return (
    <div className="max-w-6xl mx-auto text-center py-9">
      <h1>Showing product {productName}</h1>;
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ipsam
        voluptas ipsa. Ea, hic, dolorem distinctio quo necessitatibus quas
        deserunt molestias sequi eaque laborum blanditiis expedita, consequuntur
        facere quibusdam aspernatur?
      </p>
    </div>
  );
}
