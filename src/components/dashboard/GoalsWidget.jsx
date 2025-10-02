import React from "react";
import { Target, MoreHorizontal } from "lucide-react";
import { useNavigate } from "react-router-dom";

const GoalsWidget = () => {
  const NavigateTo = useNavigate();

  const goals = [
    {
      id: 1,
      name: "New Car",
      targetAmount: 25000,
      currentAmount: 18750,
      progress: 75,
      color: "bg-blue-500",
    },
    {
      id: 2,
      name: "Emergency Fund",
      targetAmount: 10000,
      currentAmount: 6500,
      progress: 65,
      color: "bg-amber-500",
    },
    {
      id: 3,
      name: "Vacation",
      targetAmount: 3000,
      currentAmount: 900,
      progress: 30,
      color: "bg-teal-500",
    },
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-slate-800">Financial Goals</h2>
        <button className="text-slate-400 hover:text-slate-600">
          <MoreHorizontal size={18} />
        </button>
      </div>

      <div className="space-y-5">
        {goals.map((goal) => (
          <div key={goal.id}>
            <div className="flex justify-between items-center mb-1">
              <div className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full ${goal.color} text-white flex items-center justify-center mr-3`}
                >
                  <Target size={16} />
                </div>
                <span className="font-medium text-slate-800">{goal.name}</span>
              </div>
              <div className="text-right">
                <div className="font-medium text-slate-800">
                  ${goal.currentAmount.toLocaleString()}{" "}
                  <span className="text-slate-500 text-sm">
                    / ${goal.targetAmount.toLocaleString()}
                  </span>
                </div>
                <div className="text-xs text-slate-500">
                  {goal.progress}% completed
                </div>
              </div>
            </div>

            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                className={`h-full ${goal.color} rounded-full transition-all duration-500 ease-out`}
                style={{ width: `${goal.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => {
          NavigateTo("/FinancialGoals");
        }}
        className="w-full mt-5 bg-blue-50 hover:bg-blue-100 text-blue-600 py-2 rounded-lg text-sm font-medium transition-colors"
      >
        Add New Goal
      </button>
    </div>
  );
};

export default GoalsWidget;
