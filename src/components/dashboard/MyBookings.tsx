import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Booking } from "@/types";
import { getBookings } from "@/services/bookings";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const MyBookings = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        setLoading(true);
        const result = await getBookings(1, 1); // Fetch the most recent booking
        setBookings(result.data);
      } catch (error) {
        console.error("Failed to fetch bookings:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBookings();
  }, []);

  return (
    <Card className="shadow-soft">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-bold">My Bookings</CardTitle>
        <Button variant="link" asChild>
          <Link to="/bookings">View all</Link>
        </Button>
      </CardHeader>
      <CardContent>
        {loading ? (
          <p>Loading...</p>
        ) : bookings.length > 0 ? (
          <div className="flex items-start gap-4">
            <div className="flex flex-col items-center justify-center text-primary font-bold">
              <span className="text-xs uppercase">
                {new Date(bookings[0].startTime).toLocaleDateString("en-US", {
                  month: "short",
                })}
              </span>
              <span className="text-2xl">
                {new Date(bookings[0].startTime).getDate()}
              </span>
            </div>
            <div className="flex-1 border-l-2 border-primary pl-4">
              <p className="font-semibold">{bookings[0].facilityName}</p>
              <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                {new Date(bookings[0].startTime).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}{" "}
                -{" "}
                {new Date(bookings[0].endTime).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>
        ) : (
          <p className="text-sm text-text-secondary-light">
            You have no upcoming bookings.
          </p>
        )}
      </CardContent>
    </Card>
  );
};
