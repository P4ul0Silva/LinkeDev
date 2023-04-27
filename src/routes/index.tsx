import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import DevDashboard from "../pages/DevDashboard";
import RecruiterDashboard from "../pages/RecruiterDashboard";
import Login from "../pages/login";
import RegisterDevRecPage from "../components/RegisterDevRecPage";

const RoutesApplication = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/options" element={<RegisterDevRecPage />} />

      <Route path="/devDashboard" element={<DevDashboard />} />
      <Route path="/recruiterDashboard" element={<RecruiterDashboard />} />

    </Routes>
  );
};

export default RoutesApplication;
