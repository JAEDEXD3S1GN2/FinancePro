import React from "react";
import {
  ArrowUpRight,
  ArrowDownRight,
  TrendingUp,
  Plus,
  MoreHorizontal,
} from "lucide-react";
import AccountCard from "./dashboard/AccountCard";
import QuickActions from "./dashboard/QuickActions";
import RecentTransactions from "./dashboard/RecentTransactions";
import SpendingChart from "./dashboard/SpendingChart";
import GoalsWidget from "./dashboard/GoalsWidget";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const NavigatTo = useNavigate();

  return (
    <div className="animate-fadeIn">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800">
          Good afternoon, Alex!
        </h1>
        <p className="text-slate-500">
          Here's what's happening with your finances today.
        </p>
      </div>

      {/* Financial Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-slate-500 font-medium">Total Balance</h3>
            <span className="text-white bg-blue-600 p-1.5 rounded-lg">
              <TrendingUp size={16} />
            </span>
          </div>
          <div className="flex items-baseline">
            <p className="text-3xl font-bold text-slate-800">$24,512.65</p>
            <span className="ml-2 text-green-500 font-medium flex items-center text-sm">
              <ArrowUpRight size={14} className="mr-0.5" />
              4.3%
            </span>
          </div>
          <p className="text-slate-400 text-xs mt-1">From last month</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-slate-500 font-medium">Income</h3>
            <span className="text-white bg-green-500 p-1.5 rounded-lg">
              <ArrowUpRight size={16} />
            </span>
          </div>
          <div className="flex items-baseline">
            <p className="text-3xl font-bold text-slate-800">$8,925.00</p>
            <span className="ml-2 text-green-500 font-medium flex items-center text-sm">
              <ArrowUpRight size={14} className="mr-0.5" />
              2.8%
            </span>
          </div>
          <p className="text-slate-400 text-xs mt-1">Current month</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-slate-500 font-medium">Expenses</h3>
            <span className="text-white bg-red-500 p-1.5 rounded-lg">
              <ArrowDownRight size={16} />
            </span>
          </div>
          <div className="flex items-baseline">
            <p className="text-3xl font-bold text-slate-800">$4,673.22</p>
            <span className="ml-2 text-red-500 font-medium flex items-center text-sm">
              <ArrowDownRight size={14} className="mr-0.5" />
              1.2%
            </span>
          </div>
          <p className="text-slate-400 text-xs mt-1">Current month</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-slate-500 font-medium">Investments</h3>
            <span className="text-white bg-purple-600 p-1.5 rounded-lg">
              <TrendingUp size={16} />
            </span>
          </div>
          <div className="flex items-baseline">
            <p className="text-3xl font-bold text-slate-800">$12,184.40</p>
            <span className="ml-2 text-green-500 font-medium flex items-center text-sm">
              <ArrowUpRight size={14} className="mr-0.5" />
              6.7%
            </span>
          </div>
          <p className="text-slate-400 text-xs mt-1">Total return</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Accounts Section */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-slate-800">
                Your Accounts
              </h2>
              <button className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium">
                <Plus size={16} className="mr-1" />
                Add Account
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <AccountCard
                type="Checking"
                accountNumber="**** 4832"
                balance="$12,409.30"
                trend="up"
                percentage="2.4%"
                color="bg-gradient-to-r from-blue-600 to-blue-400"
              />
              <AccountCard
                type="Savings"
                accountNumber="**** 2175"
                balance="$8,253.35"
                trend="up"
                percentage="1.8%"
                color="bg-gradient-to-r from-teal-600 to-teal-400"
              />
              <AccountCard
                type="Credit Card"
                accountNumber="**** 7842"
                balance="$3,850.00"
                trend="down"
                percentage="12.5%"
                color="bg-gradient-to-r from-purple-600 to-purple-400"
                limit="$10,000"
              />
              <AccountCard
                type="Investment"
                accountNumber="**** 9371"
                balance="$12,184.40"
                trend="up"
                percentage="6.7%"
                color="bg-gradient-to-r from-amber-600 to-amber-400"
              />
            </div>
          </div>

          {/* Spending Chart */}
          <SpendingChart />

          {/* Recent Transactions */}
          <RecentTransactions />
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <QuickActions />

          {/* Financial Goals */}
          <GoalsWidget />

          {/* Upcoming Bills */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-slate-800">
                Upcoming Bills
              </h2>
              <button className="text-slate-400 hover:text-slate-600">
                <MoreHorizontal size={18} />
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 mr-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 5H18C19.1046 5 20 5.89543 20 7V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V7C4 5.89543 4.89543 5 6 5H9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15 9V5C15 3.89543 14.1046 3 13 3H11C9.89543 3 9 3.89543 9 5V9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">Rent Payment</p>
                    <p className="text-xs text-slate-500">Due in 3 days</p>
                  </div>
                </div>
                <p className="font-semibold text-slate-800">$1,450.00</p>
              </div>

              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">
                      Electricity Bill
                    </p>
                    <p className="text-xs text-slate-500">Due in 5 days</p>
                  </div>
                </div>
                <p className="font-semibold text-slate-800">$95.40</p>
              </div>

              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 5L2 12.5L9 13.5M21 5L18.5 20L9 13.5M21 5L9 13.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">Internet</p>
                    <p className="text-xs text-slate-500">Due in 8 days</p>
                  </div>
                </div>
                <p className="font-semibold text-slate-800">$75.99</p>
              </div>

              <button className="w-full text-center text-blue-600 hover:text-blue-800 text-sm font-medium mt-2">
                View All Bills
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
