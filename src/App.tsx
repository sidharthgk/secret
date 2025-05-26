import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import Dashboard from './pages/Dashboard';
import AppUsersPage from './pages/AppUsersPage';
import PatientFeedbackPage from './pages/PatientFeedbackPage';
import AppPromotionsPage from './pages/AppPromotionsPage';
import AppSettingsPage from './pages/AppSettingsPage';
import PlanSettings from './pages/PlanSettings';
import HealthTips from './pages/HealthTips';
import Guidelines from './pages/Guidelines';
import { userProfile } from './data/mockData';
import LoginPage from './pages/LoginPage';

import { KeycloakProvider, useKeycloak } from './KeycloakContext';

const AppContent = () => {
  const { isAuthenticated, isLoading, user, login, logout } = useKeycloak();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Welcome</h1>
          <p className="mb-4">Please log in to access the application.</p>
          <button 
            onClick={login}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar userProfile={userProfile} />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/app-users" element={<AppUsersPage />} />
              <Route path="/patient-feedback" element={<PatientFeedbackPage />} />
              <Route path="/app-promotions" element={<AppPromotionsPage />} />
              <Route path="/app-settings" element={<AppSettingsPage />} />
              <Route path="/app-settings/plan-settings" element={<PlanSettings />} />
              <Route path="/app-settings/health-tips" element={<HealthTips />} />
              <Route path="/app-settings/guidelines" element={<Guidelines />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="*" element={<div>404 Not Found</div>} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

const App = () => (
  <KeycloakProvider>
    <AppContent />
  </KeycloakProvider>
);

export default App;