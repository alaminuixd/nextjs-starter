export default function RootTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-10 bg-red-200 m-10">
      <h1>I am from Template</h1>
      {children}
    </div>
  );
}
