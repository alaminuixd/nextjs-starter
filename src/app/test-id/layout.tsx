export default function ComponentName({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-6xl mx-auto a">
      <header>
        <h1>This is just a test</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
