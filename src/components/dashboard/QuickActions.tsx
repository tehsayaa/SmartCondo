import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const QuickActions = () => {
  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Quick Actions</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Button asChild variant="outline" className="h-24">
          <Link to="/facilities">
            <span className="material-symbols-outlined mr-2">event_available</span>
            Book Facility
          </Link>
        </Button>
        <Button asChild variant="outline" className="h-24">
          <Link to="/tickets/new">
            <span className="material-symbols-outlined mr-2">build</span>
            Report an Issue
          </Link>
        </Button>
        <Button asChild variant="outline" className="h-24">
          <Link to="/ai-chat">
            <span className="material-symbols-outlined mr-2">smart_toy</span>
            Ask AI Assistant
          </Link>
        </Button>
      </div>
    </div>
  );
};
