export default function SuspenseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-7xl mx-auto my-10">
      <div>
        <h1>Suspense Layout</h1>
      </div>
      <div>{children}</div>
    </div>
  );
}
