import React from "react";
import { X, Mail, AlertCircle, CheckCircle } from "lucide-react";

// interface NotificationPanelProps {
//   onClose: () => void;
// }

const NotificationPanel = ({ onClose }) => {
  const notifications = [
    {
      id: 1,
      type: "success",
      title: "Transfer Complete",
      message: "Your transfer of $2,500 to Jane Smith was successful.",
      time: "5 min ago",
      icon: CheckCircle,
      color: "bg-green-100 text-green-600",
    },
    {
      id: 2,
      type: "warning",
      title: "Balance Alert",
      message: "Your checking account balance is below $1,000.",
      time: "2 hours ago",
      icon: AlertCircle,
      color: "bg-amber-100 text-amber-600",
    },
    {
      id: 3,
      type: "info",
      title: "New Statement",
      message: "Your monthly statement is ready to view.",
      time: "Yesterday",
      icon: Mail,
      color: "bg-blue-100 text-blue-600",
    },
  ];

  return (
    <div
      className="absolute right-0 top-12 mt-2 w-80 bg-white rounded-lg shadow-xl overflow-hidden border border-slate-200 z-40 animate-dropIn"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex items-center justify-between p-4 border-b border-slate-200">
        <h3 className="font-semibold text-slate-800">Notifications</h3>
        <button
          className="text-slate-500 hover:text-slate-700 focus:outline-none"
          onClick={onClose}
        >
          <X size={18} />
        </button>
      </div>

      <div className="max-h-96 overflow-y-auto">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="p-4 border-b border-slate-100 hover:bg-slate-50 transition-colors"
          >
            <div className="flex">
              <div className={`p-2 rounded-full mr-3 ${notification.color}`}>
                <notification.icon size={16} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h4 className="font-medium text-slate-800">
                    {notification.title}
                  </h4>
                  <span className="text-xs text-slate-500">
                    {notification.time}
                  </span>
                </div>
                <p className="text-sm text-slate-600 mt-1">
                  {notification.message}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-3 text-center border-t border-slate-200">
        <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
          View All Notifications
        </button>
      </div>
    </div>
  );
};

export default NotificationPanel;
