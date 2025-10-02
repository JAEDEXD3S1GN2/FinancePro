import React from "react";
import {
  SendHorizontal,
  CreditCard,
  Wallet,
  ArrowDownToLine,
  Share2,
  QrCode,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

const QuickActions = () => {
  const navigate = useNavigate();

  const actionButtons = [
    {
      name: "Transfer",
      icon: SendHorizontal,
      color: "bg-blue-500",
      Link: "/More",
    },
    {
      name: "Withdraw",
      icon: ArrowDownToLine,
      color: "bg-purple-500",
      Link: "/More",
    },
    {
      name: "Pay Bills",
      icon: CreditCard,
      color: "bg-green-500",
      Link: "/More",
    },
    { name: "Top Up", icon: Wallet, color: "bg-amber-500", Link: "/More" },
    { name: "Share", icon: Share2, color: "bg-teal-500", Link: "/More" },
    { name: "Scan", icon: QrCode, color: "bg-slate-700", Link: "/More" },
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
      <h2 className="text-lg font-bold text-slate-800 mb-5">Quick Actions</h2>

      <div className="grid grid-cols-3 gap-3">
        {actionButtons.map((button, index) => (
          <button
            key={index}
            onClick={() => {
              navigate(button.Link);
            }}
            className="flex flex-col items-center justify-center p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
          >
            <div
              className={`w-10 h-10 rounded-lg ${button.color} text-white flex items-center justify-center mb-2`}
            >
              <button.icon size={18} />
            </div>
            <span className="text-xs font-medium text-slate-700">
              {button.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
