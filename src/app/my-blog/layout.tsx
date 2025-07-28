export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-10 bg-blue-200 m-10">
      <h1>I am from Layout</h1>
      {children}
    </div>
  );
}
