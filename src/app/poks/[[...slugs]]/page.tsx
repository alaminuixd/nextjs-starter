export default async function PoksDetails({
  params,
}: {
  params: Promise<{ slugs: string[] }>;
}) {
  const { slugs } = await params;
  if (Array.isArray(slugs) && slugs.length > 0) {
    return (
      <div>
        <h1>
          {" "}
          Showing URLS for
          {slugs.length > 0 &&
            slugs.map((slg, i) => <span key={i}>{slg} /</span>)}
        </h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Poks Page</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
          doloremque corrupti repudiandae nisi nam, cupiditate officia itaque
          perspiciatis explicabo tempora?
        </p>
      </div>
    );
  }
}
