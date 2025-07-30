import { Card } from "@/app/components/card";
import Link from "next/link";

export default function NotificationsArchived() {
  return (
    <Card>
      <h2>Archived Notifications</h2>
      <Link className="text-blue-300" href={"/complex-dashboard"}>
        Default
      </Link>
    </Card>
  );
}
