export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-7xl mx-auto my-5">
      <h1 className="text-center">Doc Home Page</h1>
      {children}
    </div>
  );
}
