// src/App.jsx

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import RecruiterNavbar from './components/Navbar/RecruiterNavbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import JobSeekerProfile from './pages/JobSeekerProfile';
import RecruiterHome from './pages/RecruiterHome';
import CompanyVerificationForm from './components/Recruiter/CompanyVerification/CompanyVerificationForm';
import ProtectedRoute from './components/Common/ProtectedRoute';

function AppContent() {
  const location = useLocation();
  const isRecruiterArea = location.pathname.startsWith('/recruiter');

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Conditional Navbar */}
      {isRecruiterArea ? <RecruiterNavbar /> : <Navbar />}

      <main className="flex-1">
        <Routes>
          {/* Job Seeker Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/search" element={<Jobs />} />
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute requiredUserType="jobseeker">
                <JobSeekerProfile />
              </ProtectedRoute>
            } 
          />

          {/* Recruiter Routes */}
          <Route path="/recruiter" element={<RecruiterHome />} />
          <Route 
            path="/recruiter/register" 
            element={<div className="p-20 text-center">Recruiter Register Page - Coming Soon</div>} 
          />
          <Route 
            path="/recruiter/login" 
            element={<div className="p-20 text-center">Recruiter Login Page - Coming Soon</div>} 
          />
          <Route 
            path="/recruiter/dashboard" 
            element={
              <ProtectedRoute requiredUserType="recruiter">
                <div className="p-20 text-center">Recruiter Dashboard Page - Coming Soon</div>
              </ProtectedRoute>
            } 
          />
          {/* Add more recruiter routes as needed */}
          <Route 
            path="/recruiter/verify-company" 
            element={
              <ProtectedRoute requiredUserType="recruiter">
                <CompanyVerificationForm />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}