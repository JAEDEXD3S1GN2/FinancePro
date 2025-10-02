import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";
// import TransactionHistory from '../components/TransactionHistory';
// import FinancialInsights from '../components/FinancialInsights';
// import AccountSettings from '../components/AccountSettings';
// import SecurityCenter from '../components/SecurityCenter';
import MobileNavigation from "../components/MobileNavigation";

const UserAccountPage = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case "dashboard":
        return <Dashboard />;
      case "transactions":
        return <TransactionHistory />;
      case "insights":
        return <FinancialInsights />;
      case "settings":
        return <AccountSettings />;
      case "security":
        return <SecurityCenter />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header toggleSidebar={toggleMobileSidebar} />

      <div className="flex flex-1 relative">
        {/* Desktop Sidebar */}
        <div className="hidden md:block">
          <Sidebar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        </div>

        {/* Mobile Sidebar - shown when toggled */}
        {isMobileSidebarOpen && (
          <div
            className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-50"
            onClick={toggleMobileSidebar}
          >
            <div
              className="h-full w-64 bg-slate-900 transform transition-transform duration-300 ease-in-out"
              onClick={(e) => e.stopPropagation()}
            >
              <Sidebar
                activeSection={activeSection}
                setActiveSection={(section) => {
                  setActiveSection(section);
                  setIsMobileSidebarOpen(false);
                }}
              />
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1 p-4 md:p-8 bg-slate-50 rounded-tl-3xl min-h-screen overflow-y-auto">
          <div className="max-w-7xl mx-auto">{renderActiveSection()}</div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-30">
        <MobileNavigation
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </div>
    </div>
  );
};

export default UserAccountPage;
