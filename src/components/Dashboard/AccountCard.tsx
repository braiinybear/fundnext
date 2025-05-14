// src/components/AccountCard.tsx
import React from 'react';
import { useNavigate } from "react-router-dom";

const AccountCard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-lg shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 py-6 sm:py-8 space-y-4 sm:space-y-0">
      {/* Left Side: Icon and Text */}
      <div className="flex items-start sm:items-center space-x-4">
        <div className="bg-gray-100 rounded-full p-2">
          <div className="bg-indigo-900 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
            V
          </div>
        </div>

        <div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
            <h3 className="font-medium text-lg">Free Dashboard Tour | Login:</h3>
            <span className="text-indigo-600 text-base">00000</span>
          </div>
          <p className="text-gray-500 text-sm mt-1 sm:mt-0">
            You are given a demo account to experience the dashboard
          </p>
        </div>
      </div>

      {/* Right Side: Button */}
      <div className="sm:ml-auto">
        <button
          onClick={() => navigate("/accounts/account-overview")}
          className="w-full sm:w-auto py-2 px-4 sm:px-6 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors text-sm sm:text-base"
        >
          Dashboard
        </button>
      </div>
    </div>
  );
};

export default AccountCard;
