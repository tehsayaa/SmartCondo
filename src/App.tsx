import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import AppShell from "./components/layout/AppShell";

// Page Imports
import DashboardPage from "./pages/DashboardPage";

// Auth Pages (placeholders for now)
const SignInPage = () => <div>Sign In Page</div>;
const ForgotPasswordPage = () => <div>Forgot Password Page</div>;
const OnboardingPage = () => <div>Onboarding Page</div>;

// Resident Pages (placeholders for now)
const AnnouncementListPage = () => <div>Announcement List</div>;
const AnnouncementDetailPage = () => <div>Announcement Detail</div>;
const FacilityListPage = () => <div>Facility List</div>;
const FacilityBookingPage = () => <div>Facility Booking</div>;
const MyBookingsPage = () => <div>My Bookings</div>;
const ServiceRequestListPage = () => <div>Service Request List</div>;
const CreateServiceRequestPage = () => <div>Create Service Request</div>;
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
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
