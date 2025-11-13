import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Main User Flow Imports
import UserLayout from "./users/layouts/UserLayout";
import Landing from "./users/landing/Landing";
import Signup from "./users/auth/SignUp/Signup";
import Login from "./users/auth/Login";
import UserDashboard from "./users/dashboard/UserDashboard";
import MessagePage from "./users/message/MessagePage";
import UserReports from "./users/UserReports/UserReports";
import Profile from "./users/profile/Profile";

// Central Admin portal
import CentralLayout from "./admin/central/Layout/CentralLayout";
import AdminLogin from "./admin/auth/AdminLogin";
import Dashboard from "./admin/central/pages/Dashboard";
import Users from "./admin/central/modules/users/Users";
import Complaints from "./admin/central/modules/complaints/Complaints";
import Contacts from "./admin/central/modules/contacts/Contacts";
import UserLogs from "./admin/central/modules/UserLogs/UserLogs";

// Police department portal imports
import PoliceLayout from "./admin/departments/police/layout/PoliceLayout";
import PoliceDashboard from "./admin/departments/police/Dashboard";
import PoliceUsers from "./admin/departments/police/users/Users";
import PoliceSettings from "./admin/departments/police/Settings";
import PoliceComplaints from "./admin/departments/police/PoliceComplaints";

// Immigration department portal imports
import ImmigrationLayout from "./admin/departments/immigration/ImmigrationLayout";
import ImmigrationDashboard from "./admin/departments/immigration/Dashboard";
import ImmigrationMessages from "./admin/departments/immigration/Messages";
import ImmigrationSettings from "./admin/departments/immigration/Settings";

// Road Safety department portal imports
import RoadSafetyLayout from "./admin/departments/roadsafety/RoadSafetyLayout";
import RoadSafetyDashboard from "./admin/departments/roadsafety/Dashboard";
import RoadSafetyIncidents from "./admin/departments/roadsafety/Incidents";
import RoadSafetySettings from "./admin/departments/roadsafety/Settings";

// Fire Service department portal imports
import FireServiceLayout from "./admin/departments/fireservice/FireServiceLayout";
import FireServiceDashboard from "./admin/departments/fireservice/Dashboard";
import FireServiceReports from "./admin/departments/fireservice/Reports";
import FireServiceSettings from "./admin/departments/fireservice/Settings";
import FireServiceMessages from "./admin/departments/fireservice/Messages";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Main User Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/user/auth/signup" element={<Signup />} />
        <Route path="/user/auth/login" element={<Login />} />

        <Route path="/user" element={<UserLayout />}>
          <Route path="dashboard" element={<UserDashboard />} />
          <Route path="message/:agency" element={<MessagePage />} />
          <Route path="reports" element={<UserReports />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        {/* Admin login route */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Central Admin portal */}
        <Route path="/admin/central" element={<CentralLayout />}>
          <Route index element={<Dashboard />} />{" "}
          {/* ✅ Dashboard is now the default */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="complaints" element={<Complaints />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="user-logs" element={<UserLogs />} />
        </Route>

        {/* Police admin portal routes */}
        <Route path="/admin/police" element={<PoliceLayout />}>
          <Route index element={<PoliceDashboard />} />
          <Route path="dashboard" element={<PoliceDashboard />} />
          <Route path="users" element={<PoliceUsers />} />
          <Route path="settings" element={<PoliceSettings />} />
          <Route path="complaints" element={<PoliceComplaints />} />
        </Route>

        {/* Immigration admin portal routes */}
        <Route path="/admin/immigration" element={<ImmigrationLayout />}>
          <Route index element={<ImmigrationDashboard />} />
          <Route path="dashboard" element={<ImmigrationDashboard />} />
          <Route path="messages" element={<ImmigrationMessages />} />
          <Route path="settings" element={<ImmigrationSettings />} />
        </Route>

        {/* Road Safety admin portal routes */}
        <Route path="/admin/roadsafety" element={<RoadSafetyLayout />}>
          <Route index element={<RoadSafetyDashboard />} />
          <Route path="dashboard" element={<RoadSafetyDashboard />} />
          <Route path="incidents" element={<RoadSafetyIncidents />} />
          <Route path="settings" element={<RoadSafetySettings />} />
        </Route>

        {/* Fire Service admin portal routes */}
        <Route path="/admin/fireservice" element={<FireServiceLayout />}>
          <Route index element={<FireServiceDashboard />} />
          <Route path="dashboard" element={<FireServiceDashboard />} />
          <Route path="reports" element={<FireServiceReports />} />
          <Route path="settings" element={<FireServiceSettings />} />
          <Route path="messages" element={<FireServiceMessages />} />
        </Route>

        {/* Fallback route */}
        <Route
          path="*"
          element={
            <div className="flex items-center justify-center h-screen bg-gray-100">
              <h1 className="text-4xl font-bold text-black-600">
                Admin Panel is Live 🎉
              </h1>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
