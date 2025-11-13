
import { QuickActions } from "@/components/dashboard/QuickActions";
import { LatestAnnouncements } from "@/components/dashboard/LatestAnnouncements";
import { MyBookings } from "@/components/dashboard/MyBookings";
import { MyTickets } from "@/components/dashboard/MyTickets";

const DashboardPage = () => {
    return (
        <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 xl:grid-cols-4">
                <div className="flex flex-col gap-6 lg:col-span-2 xl:col-span-3">
                    {/* Latest Announcements */}
                    <LatestAnnouncements />
                    {/* Quick Actions */}
                    <QuickActions />
                </div>
                <div className="flex flex-col gap-6 lg:col-span-1 xl:col-span-1">
                    {/* My Bookings */}
                    <MyBookings />
                    {/* My Tickets */}
                    <MyTickets />
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
