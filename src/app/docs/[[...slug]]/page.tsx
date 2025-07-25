type ParamsType = {
  params: Promise<{ slug: string[] }>;
};

export default async function Doc({ params }: ParamsType) {
  const { slug } = await params;
  if (slug.length === 2) {
    return (
      <div>
        <h2 className="text-2xl">
          Showing docs feature for {slug[0]} and {slug[1]}
        </h2>
      </div>
    );
  } else if (slug.length === 1) {
    return (
      <div>
        <h2 className="text-2xl">Showing docs feature for {slug[0]}</h2>
      </div>
    );
  }
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
        exercitationem fuga voluptatibus nesciunt. Laborum excepturi deserunt
        suscipit impedit maiores porro magnam doloremque. Ad nostrum iure quidem
        quod et quisquam labore?
      </p>
    </div>
  );
}
