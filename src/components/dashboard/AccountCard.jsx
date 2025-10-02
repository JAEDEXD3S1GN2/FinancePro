import React from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

// interface AccountCardProps {
//   type: string;
//   accountNumber: string;
//   balance: string;
//   trend: "up" | "down";
//   percentage: string;
//   color: string;
//   limit?: string;
// }

const AccountCard = ({
  type,
  accountNumber,
  balance,
  trend,
  percentage,
  color,
  limit,
}) => {
  return (
    <div
      className={`relative overflow-hidden rounded-xl p-5 text-white ${color} hover:shadow-lg transition-shadow`}
    >
      <div className="flex justify-between items-start z-10 relative">
        <div>
          <h3 className="font-medium mb-1">{type}</h3>
          <p className="opacity-80 text-sm">{accountNumber}</p>
        </div>
        <div className="flex flex-col items-end">
          <p className="font-bold text-xl">{balance}</p>
          {limit && <p className="text-xs opacity-80">Limit: {limit}</p>}
        </div>
      </div>

      <div className="mt-6 flex justify-between items-center z-10 relative">
        <div className="flex items-center">
          <span
            className={`text-sm flex items-center ${
              trend === "up" ? "text-green-100" : "text-red-100"
            }`}
          >
            {trend === "up" ? (
              <ArrowUpRight size={14} className="mr-0.5" />
            ) : (
              <ArrowDownRight size={14} className="mr-0.5" />
            )}
            {percentage}
          </span>
        </div>
        <p className="text-xs opacity-80">Updated 1 hour ago</p>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-white opacity-10 -mr-6 -mt-6"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 rounded-full bg-white opacity-10 -ml-5 -mb-5"></div>
    </div>
  );
};

export default AccountCard;
