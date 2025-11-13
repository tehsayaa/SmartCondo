import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Ticket } from "@/types";
import { getTickets } from "@/services/tickets";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const getStatusVariant = (status: string) => {
  switch (status) {
    case "in_progress":
      return "secondary";
    case "resolved":
      return "default";
    default:
      return "outline";
  }
};

export const MyTickets = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        setLoading(true);
        const result = await getTickets(1, 2); // Fetch the two most recent tickets
        setTickets(result.data);
      } catch (error) {
        console.error("Failed to fetch tickets:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTickets();
  }, []);

  return (
    <Card className="shadow-soft">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-bold">My Tickets</CardTitle>
        <Button variant="link" asChild>
          <Link to="/tickets">View all</Link>
        </Button>
      </CardHeader>
      <CardContent>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul className="divide-y divide-border-light dark:divide-border-dark">
            {tickets.map((ticket) => (
              <li
                key={ticket.id}
                className="flex items-center justify-between gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50"
              >
                <div>
                  <p className="font-semibold">{ticket.title}</p>
                  <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                    {ticket.id}
                  </p>
                </div>
                <Badge variant={getStatusVariant(ticket.status)}>
                  {ticket.status.replace("_", " ")}
                </Badge>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
};
