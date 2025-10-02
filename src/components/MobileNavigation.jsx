import React from "react";
import {
  LayoutDashboard,
  BarChart,
  Settings,
  Shield,
  CreditCard,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

// interface MobileNavigationProps {
//   activeSection: string;
//   setActiveSection: (section: string) => void;
// }

const MobileNavigation = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: "dashboard", name: "Home", icon: LayoutDashboard, Link: "/UserAcc" },
    {
      id: "transactions",
      name: "Transactions",
      icon: CreditCard,
      Link: "/TransactionHistory",
    },
    { id: "insights", name: "Insights", icon: BarChart, Link: "/Insights" },
    { id: "settings", name: "Settings", icon: Settings, Link: "/Settings" },
    { id: "security", name: "Security", icon: Shield, Link: "/Security" },
  ];

  const NavigateTo = useNavigate();

  return (
    <div className="bg-slate-900 text-slate-300 py-3 px-4 shadow-lg border-t border-slate-800">
      <nav className="flex justify-between items-center">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => useNavigate(`${item.Link}`)}
            className={`flex flex-col items-center justify-center w-16 transition-colors ${
              activeSection === item.id
                ? "text-blue-400"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <item.icon size={20} className="mb-1" />
            <span className="text-xs">{item.name}</span>
            {activeSection === item.id && (
              <span className="absolute top-0 w-8 h-1 bg-blue-400 rounded-b-lg animate-pulse"></span>
            )}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default MobileNavigation;
