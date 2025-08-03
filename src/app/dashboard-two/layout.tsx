export default function DashboardTwoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>
        <h1>Welcome to Dashboard Two</h1>
      </div>
      <div>{children}</div>
    </div>
  );
}
