import { Card } from "@/app/components/card";
import Link from "next/link";

export default function Notifications() {
  return (
    <Card>
      <h2>Notifications</h2>
      <Link className="text-blue-300" href={"/complex-dashboard/archived"}>
        Archived
      </Link>
    </Card>
  );
}
