export default async function Docs({ params }: { params: { slug: string[] } }) {
  const { slug } = await params;
  console.log(slug);
  if (slug?.length === 2) {
    return (
      <div>
        <h1>
          Viewing Doc feature {slug[0]} and Concept {slug[1]}
        </h1>
      </div>
    );
  } else if (slug?.length === 1) {
    return (
      <div>
        <h1>Viewing Doc feature {slug[0]}</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>Docs home page</h1>
    </div>
  );
}
