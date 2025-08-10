export default async function PageId({
  params,
}: {
  params: Promise<{ testId: string }>;
}) {
  const { testId } = await params;
  return (
    <div className="text-center py-10">
      <h2>You are seeing something {decodeURIComponent(testId)}</h2>
    </div>
  );
}
