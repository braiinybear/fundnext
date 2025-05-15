// src/components/Dashboard.tsx
import React from "react";
import Tabs from "./Tabs";
import promoImage from "../../assets/1746619320_dashboard_image.jpg";

const Dashboard: React.FC = () => {
  return (
    <div className="py-6 px-4 sm:px-6 w-full">
      {/* Hero Section */}
      <div className="bg-blue-950 px-4 sm:px-6 py-8 w-full overflow-hidden relative rounded-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/30 to-purple-900/30" />

        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              Accounts
            </h1>
            <p className="text-gray-200 text-sm sm:text-base max-w-md">
              Unlock your trading potential with fundednxt. Start trading now!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
            <button className="py-2 px-6 bg-indigo-900 text-white rounded-lg hover:bg-indigo-800 transition-colors w-full sm:w-auto">
              Free Trial
            </button>
            <button className="py-2 px-6 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors w-full sm:w-auto">
              Start Challenge
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Tabs */}
        <div className="lg:col-span-2">
          <Tabs />
        </div>

        {/* Right: Sidebar */}
        <div className="space-y-6">
          {/* Trading Rules */}
          <div className="bg-indigo-600 rounded-lg py-3 px-4 text-white flex items-center justify-between shadow">
            <div className="flex items-center space-x-2">
              <span className="material-symbols-outlined text-white">help</span>
              <span className="font-semibold text-sm sm:text-base">
                Trading Rules & Guidelines (Futures)
              </span>
            </div>
            <span className="material-symbols-outlined text-white text-base sm:text-lg">
              open_in_new
            </span>
          </div>

          {/* Promo Image */}
          <div className="rounded-lg overflow-hidden shadow">
            <img
              src={promoImage}
              alt="New Broker Promo"
              className="w-full object-cover h-auto max-h-80 sm:max-h-[320px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
