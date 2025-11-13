import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import AppShell from "./components/layout/AppShell";

// Page Imports
import DashboardPage from "./pages/DashboardPage";
import FacilitiesPage from "./pages/FacilitiesPage";
import TicketsPage from "./pages/TicketsPage";
import BookingsPage from "./pages/BookingsPage";
import CreateTicketPage from "./pages/CreateTicketPage";
import { ThemeTest } from "./components/ThemeTest";

// Auth Pages (placeholders for now)
const SignInPage = () => <div>Sign In Page</div>;
const ForgotPasswordPage = () => <div>Forgot Password Page</div>;
const OnboardingPage = () => <div>Onboarding Page</div>;

// Resident Pages (placeholders for now)
const AnnouncementListPage = () => <div>Announcement List</div>;
const AnnouncementDetailPage = () => <div>Announcement Detail</div>;
const FacilityListPage = () => <FacilitiesPage />;
const FacilityBookingPage = () => <div>Facility Booking</div>;
const MyBookingsPage = () => <BookingsPage />;
const ServiceRequestListPage = () => <TicketsPage />;
const CreateServiceRequestPage = () => <CreateTicketPage />;
const ServiceRequestDetailPage = () => <div>Service Request Detail</div>;
const AIChatPage = () => <div>AI Chat</div>;

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth Routes */}
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />

        {/* Main App Routes with Shell */}
        <Route
          path="/"
          element={
            <AppShell>
              <Outlet />
            </AppShell>
          }
        >
          <Route index element={<DashboardPage />} />
          <Route path="announcements" element={<AnnouncementListPage />} />
          <Route
            path="announcements/:id"
            element={<AnnouncementDetailPage />}
          />
          <Route path="facilities" element={<FacilityListPage />} />
          <Route path="facilities/:id/book" element={<FacilityBookingPage />} />
          <Route path="bookings" element={<MyBookingsPage />} />
          <Route path="tickets" element={<ServiceRequestListPage />} />
          <Route path="tickets/new" element={<CreateServiceRequestPage />} />
          <Route path="tickets/:id" element={<ServiceRequestDetailPage />} />
          <Route path="ai-chat" element={<AIChatPage />} />
          <Route path="theme-test" element={<ThemeTest />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
