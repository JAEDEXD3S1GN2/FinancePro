import React, { useState, useEffect } from "react";
import { Bell, Search, Menu, X } from "lucide-react";
import NotificationPanel from "./NotificationPanel";

// interface HeaderProps {
//   toggleSidebar: () => void;
// }

const Header = ({ toggleSidebar }) => {
  const [notifications, setNotifications] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 py-4 px-6 transition-all duration-300 ${
        scrolled ? "bg-slate-900 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <button
            className="md:hidden mr-4 text-white focus:outline-none hover:text-blue-400 transition-colors"
            onClick={toggleSidebar}
          >
            <Menu size={24} />
          </button>

          <div className="flex items-center">
            <div className="mr-2 bg-blue-500 text-white p-2 rounded-lg">
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
            <h1 className="text-xl font-bold text-white hidden sm:block">
              FinancePro
            </h1>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {searchActive ? (
            <div className="relative flex items-center transform origin-right animate-searchExpand">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-slate-800 text-white pl-10 pr-4 py-2 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 text-slate-400" size={18} />
              <button
                className="absolute right-3 text-slate-400 hover:text-white transition-colors"
                onClick={() => setSearchActive(false)}
              >
                <X size={18} />
              </button>
            </div>
          ) : (
            <button
              className="text-white hover:text-blue-400 transition-colors focus:outline-none"
              onClick={() => setSearchActive(true)}
            >
              <Search className="animate-fadeIn" size={22} />
            </button>
          )}

          <div className="relative">
            <button
              className="relative text-white hover:text-blue-400 transition-colors focus:outline-none"
              onClick={() => setNotifications(!notifications)}
            >
              <Bell size={22} />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                3
              </span>
            </button>

            {notifications && (
              <NotificationPanel onClose={() => setNotifications(false)} />
            )}
          </div>

          <div className="flex items-center">
            <div className="w-9 h-9 rounded-full bg-gradient-to-r from-blue-400 to-teal-400 flex items-center justify-center text-white font-bold mr-2 border-2 border-white overflow-hidden">
              <img
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
                alt="User"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-white text-sm hidden md:block">
              Alex Morgan
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
