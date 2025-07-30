export default function ComplexDashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  let isLoggedIn = true;
  return isLoggedIn ? (
    <div className="max-w-7xl mx-auto my-10">
      <div className="md:grid md:grid-cols-2 gap-5">
        <div className="col-span-2">{children}</div>
        <div className="flex flex-col gap-5">
          <div className="shadow-sm">{revenue}</div>
          <div className="shadow-sm">{users}</div>
        </div>
        <div className="flex shadow-sm">{notifications}</div>
      </div>
    </div>
  ) : (
    login
  );
}
