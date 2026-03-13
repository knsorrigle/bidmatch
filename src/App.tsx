import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import LandingPage from './screens/LandingPage.tsx';
import Login from './screens/Login.tsx';
import RoleSelection from './screens/RoleSelection.tsx';
import FreelancerOnboarding from './screens/FreelancerOnboarding.tsx';
import BrowseProjects from './screens/BrowseProjects.tsx';
import FreelancerProfile from './screens/FreelancerProfile.tsx';
import Assessment from './screens/Assessment.tsx';
import ClientDashboard from './screens/ClientDashboard.tsx';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div 
        key={location.pathname}
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }} // Liquid easing
        className="w-full min-h-screen bg-black"
      >
        <Routes location={location}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/role" element={<RoleSelection />} />
          <Route path="/freelancer/onboarding" element={<FreelancerOnboarding />} />
          <Route path="/freelancer/browse" element={<BrowseProjects />} />
          <Route path="/freelancer/profile/:id" element={<FreelancerProfile />} />
          <Route path="/freelancer/assessment" element={<Assessment />} />
          <Route path="/client/dashboard" element={<ClientDashboard />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
