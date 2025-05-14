// src/components/AccountCard.tsx
import React from 'react';
import { useNavigate } from "react-router-dom"; // add this


const AccountCard: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-lg shadow-sm  flex items-center px-6 py-8">
      <div className="flex items-center space-x-4">
        <div className="bg-gray-100 rounded-full p-2">
          <div className="bg-indigo-900 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
            V
          </div>
        </div>

        <div>
          <div className="flex items-center space-x-2">
            <h3 className="font-medium text-lg">Free Dashboard Tour | Login:</h3>
            <span className="text-indigo-600">00000</span>
          </div>
          <p className="text-gray-500 text-sm">
            You are given a demo account to experience the dashboard
          </p>
        </div>
      </div>

      <div className="ml-auto">
         <button
          onClick={() => navigate("/accounts/account-overview")}
          className="py-2 px-6 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors"
        >
          Dashboard
        </button>
      </div>
    </div>
  );
};

export default AccountCard;
