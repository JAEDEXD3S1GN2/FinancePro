import React, { useState } from "react";
import { BarChart3, PieChart } from "lucide-react";

const SpendingChart = () => {
  const [chartType, setChartType] = useState("bar");

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold text-slate-800">Spending Analysis</h2>

        <div className="flex items-center space-x-2 bg-slate-100 p-1 rounded-lg">
          <button
            className={`p-1.5 rounded-md ${
              chartType === "bar"
                ? "bg-white shadow-sm"
                : "text-slate-500 hover:text-slate-700"
            }`}
            onClick={() => setChartType("bar")}
          >
            <BarChart3 size={16} />
          </button>
          <button
            className={`p-1.5 rounded-md ${
              chartType === "pie"
                ? "bg-white shadow-sm"
                : "text-slate-500 hover:text-slate-700"
            }`}
            onClick={() => setChartType("pie")}
          >
            <PieChart size={16} />
          </button>
        </div>
      </div>

      {chartType === "bar" ? (
        <div className="h-64 flex">
          <div className="flex-1 flex items-end space-x-4 px-4">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
              (day, index) => {
                const height = [60, 45, 80, 65, 75, 90, 40][index];

                return (
                  <div key={day} className="flex flex-col items-center flex-1">
                    <div
                      className="w-full bg-blue-500 rounded-t-lg hover:bg-blue-600 transition-colors cursor-pointer relative group"
                      style={{ height: `${height}%` }}
                    >
                      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white py-1 px-2 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                        ${[120, 90, 160, 130, 150, 180, 80][index]}
                      </div>
                    </div>
                    <div className="text-xs text-slate-500 mt-2">{day}</div>
                  </div>
                );
              }
            )}
          </div>
          <div className="w-16 flex flex-col justify-between text-xs text-slate-500 py-2">
            <div>$200</div>
            <div>$150</div>
            <div>$100</div>
            <div>$50</div>
            <div>$0</div>
          </div>
        </div>
      ) : (
        <div className="h-64 flex justify-center items-center">
          <div className="relative w-48 h-48">
            <svg viewBox="0 0 36 36" className="w-full h-full">
              <circle
                cx="18"
                cy="18"
                r="15.91549430918954"
                fill="transparent"
                stroke="#f1f5f9"
                strokeWidth="3"
              ></circle>
              <circle
                cx="18"
                cy="18"
                r="15.91549430918954"
                fill="transparent"
                stroke="#3b82f6"
                strokeWidth="3"
                strokeDasharray="35 65"
                strokeDashoffset="25"
              ></circle>
              <circle
                cx="18"
                cy="18"
                r="15.91549430918954"
                fill="transparent"
                stroke="#10b981"
                strokeWidth="3"
                strokeDasharray="25 75"
                strokeDashoffset="-40"
              ></circle>
              <circle
                cx="18"
                cy="18"
                r="15.91549430918954"
                fill="transparent"
                stroke="#f59e0b"
                strokeWidth="3"
                strokeDasharray="20 80"
                strokeDashoffset="-65"
              ></circle>
              <circle
                cx="18"
                cy="18"
                r="15.91549430918954"
                fill="transparent"
                stroke="#ef4444"
                strokeWidth="3"
                strokeDasharray="15 85"
                strokeDashoffset="-85"
              ></circle>
              <circle
                cx="18"
                cy="18"
                r="15.91549430918954"
                fill="transparent"
                stroke="#8b5cf6"
                strokeWidth="3"
                strokeDasharray="5 95"
                strokeDashoffset="-100"
              ></circle>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xl font-bold text-slate-700">$910</span>
            </div>
          </div>

          <div className="ml-8">
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-sm text-slate-700">Housing (35%)</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm text-slate-700">Food (25%)</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-amber-500 rounded-full mr-2"></div>
                <span className="text-sm text-slate-700">Transport (20%)</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <span className="text-sm text-slate-700">Shopping (15%)</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                <span className="text-sm text-slate-700">Other (5%)</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mt-6 p-3 bg-blue-50 rounded-lg border border-blue-100 text-blue-700 text-sm">
        <p className="font-medium">Spending Insights:</p>
        <p className="mt-1">
          You've spent 15% less on food compared to last month. Great job on
          budget management!
        </p>
      </div>
    </div>
  );
};

export default SpendingChart;
