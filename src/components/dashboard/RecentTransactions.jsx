import React, { useState } from "react";
import {
  Search,
  ChevronDown,
  ArrowDownLeft,
  ArrowUpRight,
  Coffee,
  ShoppingBag,
  Home,
  Car,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const RecentTransactions = () => {
  const [filter, setFilter] = useState("all");

  const transactions = [
    {
      id: 1,
      name: "Amazon",
      category: "Shopping",
      date: "Today, 12:42 PM",
      amount: "-$85.40",
      type: "expense",
      icon: ShoppingBag,
      color: "bg-amber-500",
    },
    {
      id: 2,
      name: "Jane Smith",
      category: "Transfer",
      date: "Today, 09:15 AM",
      amount: "+$1,200.00",
      type: "income",
      icon: ArrowDownLeft,
      color: "bg-green-500",
    },
    {
      id: 3,
      name: "Starbucks",
      category: "Food & Drink",
      date: "Yesterday",
      amount: "-$4.50",
      type: "expense",
      icon: Coffee,
      color: "bg-red-500",
    },
    {
      id: 4,
      name: "Mortgage Payment",
      category: "Housing",
      date: "Yesterday",
      amount: "-$950.00",
      type: "expense",
      icon: Home,
      color: "bg-blue-500",
    },
    {
      id: 5,
      name: "Car Insurance",
      category: "Transportation",
      date: "2 days ago",
      amount: "-$125.75",
      type: "expense",
      icon: Car,
      color: "bg-purple-500",
    },
  ];

  const navigateTo = useNavigate();

  const filteredTransactions =
    filter === "all"
      ? transactions
      : transactions.filter((t) => t.type === filter);

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
      <div className="flex flex-wrap justify-between items-center mb-6">
        <h2 className="text-lg font-bold text-slate-800">
          Recent Transactions
        </h2>

        <div className="flex items-center space-x-3 mt-3 sm:mt-0">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <Search size={16} className="text-slate-400" />
            </span>
            <input
              type="text"
              placeholder="Search transactions"
              className="pl-8 pr-3 py-1.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="relative">
            <select
              className="appearance-none pl-3 pr-8 py-1.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option className="text-slate-700" value="all">
                All
              </option>
              <option className="text-slate-700" value="income">
                Income
              </option>
              <option className="text-slate-700" value="expense">
                Expenses
              </option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <ChevronDown size={16} className="text-slate-400" />
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="text-left py-3 px-2 text-slate-500 font-medium text-sm">
                Name
              </th>
              <th className="text-left py-3 px-2 text-slate-500 font-medium text-sm">
                Category
              </th>
              <th className="text-left py-3 px-2 text-slate-500 font-medium text-sm">
                Date
              </th>
              <th className="text-right py-3 px-2 text-slate-500 font-medium text-sm">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((transaction) => (
              <tr
                key={transaction.id}
                className="border-b border-slate-100 hover:bg-slate-50 transition-colors"
              >
                <td className="py-3 px-2">
                  <div className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full ${transaction.color} text-white flex items-center justify-center mr-3`}
                    >
                      <transaction.icon size={14} />
                    </div>
                    <span className="font-medium text-slate-800">
                      {transaction.name}
                    </span>
                  </div>
                </td>
                <td className="py-3 px-2 text-slate-600">
                  {transaction.category}
                </td>
                <td className="py-3 px-2 text-slate-600">{transaction.date}</td>
                <td
                  className={`py-3 px-2 text-right font-medium ${
                    transaction.type === "income"
                      ? "text-green-600"
                      : "text-slate-800"
                  }`}
                >
                  {transaction.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 text-center">
        <button
          onClick={() => {
            navigateTo("/TransactionHistory");
          }}
          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          View All Transactions
        </button>
      </div>
    </div>
  );
};

export default RecentTransactions;
