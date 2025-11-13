import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Announcement } from "@/types";
import { getAnnouncements } from "@/services/announcements";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const AnnouncementIcon = ({ priority }: { priority: string }) => {
  switch (priority) {
    case "emergency":
      return (
        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-danger/10 text-danger">
          <span className="material-symbols-outlined text-xl">error</span>
        </div>
      );
    case "high":
      return (
        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-warning/10 text-warning">
          <span className="material-symbols-outlined text-xl">
            construction
          </span>
        </div>
      );
    default:
      return (
        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
          <span className="material-symbols-outlined text-xl">campaign</span>
        </div>
      );
  }
};

export const LatestAnnouncements = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        setLoading(true);
        const result = await getAnnouncements(1, 3); // Fetch first 3 for dashboard
        setAnnouncements(result.data);
      } catch (error) {
        console.error("Failed to fetch announcements:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAnnouncements();
  }, []);

  return (
    <Card className="shadow-soft">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-bold">Latest Announcements</CardTitle>
        <Button variant="link" asChild>
          <Link to="/announcements">View all</Link>
        </Button>
      </CardHeader>
      <CardContent>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul className="divide-y divide-border-light dark:divide-border-dark">
            {announcements.map((item) => (
              <li
                key={item.id}
                className="flex items-start gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50"
              >
                <AnnouncementIcon priority={item.priority} />
                <div className="flex-1">
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                    {item.shortDescription}
                  </p>
                  <Badge variant="outline" className="mt-2">
                    {item.category}
                  </Badge>
                </div>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
};
