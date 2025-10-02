import React from "react";
import {
  LayoutDashboard,
  BarChart,
  Settings,
  Shield,
  CreditCard,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// interface SidebarProps {
//   activeSection: string;
//   setActiveSection: (section: string) => void;
// }

const Sidebar = ({ activeSection, setActiveSection }) => {
  const menuItems = [
    {
      id: "dashboard",
      name: "Dashboard",
      icon: LayoutDashboard,
      Link: "/UserAcc",
    },
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
    <div className="h-full bg-slate-900 w-64 py-6 flex flex-col">
      <div className="px-6 mb-8">
        <div className="flex items-center">
          <div className="bg-blue-500 text-white p-2 rounded-lg mr-3">
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
              <path
                d="M2 17L12 22L22 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h2 className="text-white text-xl font-bold">FinancePro</h2>
        </div>
      </div>

      <div className="flex-1 px-4">
        <div className="mb-8">
          <h3 className="text-xs uppercase text-slate-500 font-semibold mb-4 px-2">
            Main Menu
          </h3>
          <nav>
            <ul className="space-y-1">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => NavigateTo(`${item.Link}`)}
                    className={`w-full flex items-center px-3 py-2.5 rounded-lg transition-colors ${
                      activeSection === item.id
                        ? "bg-blue-600 text-white"
                        : "text-slate-400 hover:bg-slate-800 hover:text-white"
                    }`}
                  >
                    <item.icon size={20} className="mr-3" />
                    <span>{item.name}</span>
                    {activeSection === item.id && (
                      <span className="ml-auto w-2 h-2 bg-white rounded-full"></span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mb-8">
          <h3 className="text-xs uppercase text-slate-500 font-semibold mb-4 px-2">
            Quick Links
          </h3>
          <div className="bg-slate-800 rounded-xl p-4">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                <span className="text-sm font-bold">$</span>
              </div>
              <div className="ml-3">
                <p className="text-slate-300 text-sm">Balance</p>
                <p className="text-white font-bold">$24,512.65</p>
              </div>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-medium transition-colors">
              Transfer Money
            </button>
          </div>
        </div>
      </div>

      <div className="mt-auto px-4 pb-6">
        <button className="w-full flex items-center px-3 py-2.5 rounded-lg text-red-400 hover:bg-slate-800 hover:text-red-300 transition-colors">
          <LogOut size={20} className="mr-3" />
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
