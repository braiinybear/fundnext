import React from "react";
import { Eye, RotateCw, Globe, HelpCircle } from "lucide-react";

const AccountOverview: React.FC = () => {
  // Table data moved inside the component
  const tableData = [
    {
      type: 'Trade',
      currentAvg: 'N/A',
      overallAvg: 'N/A',
      upperLimit: 'N/A',
      lowerLimit: 'N/A',
      standardDeviation: '2'
    },
    {
      type: 'Lot',
      currentAvg: 'N/A',
      overallAvg: 'N/A',
      upperLimit: 'N/A',
      lowerLimit: 'N/A',
      standardDeviation: '2'
    }
  ];

  return (
    <div className="p-2 sm:p-4 md:p-6 space-y-4 md:space-y-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 md:mb-6">Account Overview</h2>
      
      {/* Main Info Card */}
      <div className="bg-white rounded-xl shadow p-4 flex flex-col lg:flex-row justify-between gap-4 md:gap-6">
        {/* User Info */}
        <div className="flex-1 lg:flex-[1.2] lg:border-r border-gray-200 lg:pr-6">
          <h3 className="text-lg font-bold text-indigo-900 mb-1">
            Hello{" "}
            <span className="text-indigo-800">Chander Prakash Kotnala</span> !
          </h3>
          <p className="text-gray-700 mb-4">
            Currently, you have an Express account
          </p>
          <ul className="text-sm text-gray-800 space-y-2">
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-indigo-600">
                verified
              </span>
              Initial Balance: <span className="font-semibold">200000</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-indigo-600">
                verified
              </span>
              Plan Type:{" "}
              <span className="font-semibold">Express | 200k</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-indigo-600">
                verified
              </span>
              Account Type: <span className="font-semibold">Swap</span>
            </li>
          </ul>
        </div>

        {/* Account Details */}
        <div className="flex-1 lg:flex-[1.5] px-0 lg:px-4 lg:border-r border-gray-200 mt-4 lg:mt-0">
          {/* Title outside grid */}
          <h2 className="text-lg sm:text-xl font-bold mb-4">Account Details</h2>

          {/* Account Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6">
            <div className="flex justify-between items-center bg-gray-50 py-2 px-4 rounded-md border border-gray-200">
              <span className="text-gray-700 font-medium">Log In</span>
              <span className="font-mono text-gray-800">21180148</span>
            </div>

            <div className="flex justify-between items-center bg-gray-50 py-2 px-4 rounded-md border border-gray-200">
              <span className="text-gray-700 font-medium">Investor Pass.</span>
              <span className="font-mono text-gray-800">yuh*7689</span>
            </div>

            <div className="flex justify-between items-center bg-gray-50 py-2 px-4 rounded-md border border-gray-200">
              <span className="text-gray-700 font-medium">Master Pass.</span>
              <div className="flex gap-2 items-center">
                <span className="tracking-widest font-mono text-gray-800">
                  2025$#@67
                </span>
                
              </div>
            </div>

            <div className="flex justify-between items-center bg-gray-50 py-2 px-4 rounded-md border border-gray-200">
              {/* <span className="text-gray-700 font-medium">Server</span> */}
              <span className="font-semibold text-gray-800">
                fundednext-Server
              </span>
            </div>
          </div>
        </div>

        {/* Trading Cycle Details */}
        <div className="flex-1 lg:flex-[0.8] lg:pl-4 mt-4 lg:mt-0">
          <h4 className="text-lg font-bold text-indigo-900 mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-indigo-700">
              refresh
            </span>
            Trading Cycle Details
          </h4>
          <p className="text-sm text-gray-700 mb-2">
            <span className="font-semibold">Start Date:</span> Dec 5, 2022
          </p>
          <p className="text-sm text-gray-700">
            <span className="font-semibold">End Date:</span> Dec 31, 2022
          </p>
        </div>
      </div>

      <div className="p-2 sm:p-4 md:p-6 grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        {/* Left Section (2/3) */}
        <div className="lg:col-span-2 space-y-4 md:space-y-6">
          {/* Stats Section */}
          <div className="bg-white shadow rounded-xl p-4">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined">bar_chart</span>
              Stats
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {[
                { label: "Balance", value: "$200000" },
                { label: "Profit/Loss", value: "$15000" },
                { label: "Floating Loss", value: "$0" },
                { label: "Trading Days", value: "21" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-indigo-50 text-indigo-900 rounded-lg p-3 sm:p-4 shadow"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="material-symbols-outlined">payments</span>
                    <span className="font-bold">{stat.value}</span>
                  </div>
                  <span className="text-sm text-indigo-800">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Trading Objectives Section */}
          <div className="bg-white shadow rounded-xl p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <span className="material-symbols-outlined">
                  calendar_month
                </span>
                Trading Objective
              </h3>
              <span className="text-xs sm:text-sm text-blue-600 font-medium">
                (Refreshing in 01:28)
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {/* Daily Loss */}
             <div className="bg-blue-50 p-3 sm:p-4 rounded-lg border border-blue-200">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 font-semibold text-green-900">
                    <span className="material-symbols-outlined text-green-600">
                      check_circle
                    </span>
                    Daily Loss Limit
                  </div>
                  <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded">
                    Passed
                  </span>
                </div>
                <p className="text-sm">Max Loss Limit: 1,250.00</p>
                <p className="text-sm">Daily Loss till now: $0</p>
                <p className="text-sm font-semibold mt-2">
                  Today's Permitted Loss: 2500
                </p>
              </div>

              {/* Overall Loss */}
              <div className="bg-blue-50 p-3 sm:p-4 rounded-lg border border-blue-200">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 font-semibold text-green-900">
                    <span className="material-symbols-outlined text-green-600">
                      check_circle
                    </span>
                    Overall Loss Limit
                  </div>
                  <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded">
                    Passed
                  </span>
                </div>
                <p className="text-sm">Max Loss Limit: 2,500.00</p>
                <p className="text-sm">Overall Loss till now: $0</p>
                <p className="text-sm font-semibold mt-2">
                  Max Permitted Loss: 5000
                </p>
              </div>

              {/* Minimum Trading Days */}
              <div className="bg-blue-50 p-3 sm:p-4 rounded-lg border border-blue-200">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 font-semibold text-green-900">
                    <span className="material-symbols-outlined text-green-600">
                      check_circle
                    </span>
                    Minimum Trading Days
                  </div>
                  <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded">
                    Passed
                  </span>
                </div>
                <p className="text-sm">Minimum: 10 Days</p>
                <p className="text-sm">Current Result: 5</p>
              </div>

              {/* Profit Target */}
              <div className="bg-blue-50 p-3 sm:p-4 rounded-lg border border-blue-200">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 font-semibold text-green-900">
                    <span className="material-symbols-outlined text-green-600">
                      check_circle
                    </span>
                    Profit Target
                  </div>
                  <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded">
                    Passed
                  </span>
                </div>
                <p className="text-sm">Minimum: 15,000</p>
                <p className="text-sm">Current Result: $15,000</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="bg-white shadow rounded-xl p-4 space-y-4 md:space-y-6 text-center">
          {/* Account Growth */}
          <div className="bg-gradient-to-b from-gray-800 to-indigo-900 text-white py-6 rounded-md">
            <p className="text-lg font-semibold">Account Growth</p>
            <p className="text-3xl font-bold">0%</p>
          </div>

          {/* Support */}
          <div className="space-y-3">
            <p className="font-semibold text-gray-800">
              fundednxt Email Support
            </p>
            <div className="flex justify-center">
              <img
                src="/api/placeholder/80/80"
                alt="Support"
                className="w-12 h-12"
              />
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-md text-sm">
              Contact
            </button>
            <p className="text-sm text-blue-700 underline">
              support@fundednxt.com
            </p>
          </div>

          {/* Countdown */}
          <div className="space-y-2">
            <p className="text-sm text-gray-700">
              Today's permitted loss will reset in
            </p>
            <div className="mt-2 border px-4 py-2 text-lg font-bold rounded-md inline-block">
              09:51:50
            </div>
            <p className="text-xs text-gray-500">Countdown Timezone: GMT+3</p>
          </div>
        </div>
      </div>

      {/* Consistency History Section */}
      <div className="border rounded-lg bg-white p-3 sm:p-4 md:p-6">
        {/* Header */}
        <div className="flex items-center gap-2 mb-2 sm:mb-4">
          <Globe className="text-blue-900" size={20} />
          <h2 className="text-lg sm:text-xl font-bold text-blue-900">Consistency History</h2>
        </div>
        
        {/* Table with enhanced horizontal scroll */}
        <div className="relative">
          <div className="overflow-x-auto flex pb-2 custom-scrollbar" style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#94a3b8 #e2e8f0'
          }}>
            <div className="min-w-[800px]">
              <table className="w-full border-collapse">
                {/* Table Header */}
                <thead>
                  <tr>
                    <th className="bg-blue-50 text-left py-2 sm:py-3 px-2 sm:px-4 text-sm sm:text-base font-semibold text-blue-900 border-r border-gray-200 sticky left-0 z-10">
                      Consistency
                    </th>
                    <th className="bg-blue-50 text-left py-2 sm:py-3 px-2 sm:px-4 text-sm sm:text-base font-semibold text-blue-900 border-r border-gray-200">
                      <div className="flex items-center">
                        Current Avg.
                        <HelpCircle size={14} className="ml-1 text-gray-500" />
                      </div>
                    </th>
                    <th className="bg-blue-50 text-left py-2 sm:py-3 px-2 sm:px-4 text-sm sm:text-base font-semibold text-blue-900 border-r border-gray-200">
                      <div className="flex items-center">
                        Overall Avg.
                        <HelpCircle size={14} className="ml-1 text-gray-500" />
                      </div>
                    </th>
                    <th className="bg-blue-50 text-left py-2 sm:py-3 px-2 sm:px-4 text-sm sm:text-base font-semibold text-blue-900 border-r border-gray-200">
                      <div className="flex items-center">
                        Upper Limit
                        <HelpCircle size={14} className="ml-1 text-gray-500" />
                      </div>
                    </th>
                    <th className="bg-blue-50 text-left py-2 sm:py-3 px-2 sm:px-4 text-sm sm:text-base font-semibold text-blue-900 border-r border-gray-200">
                      <div className="flex items-center">
                        Lower Limit
                        <HelpCircle size={14} className="ml-1 text-gray-500" />
                      </div>
                    </th>
                    <th className="bg-blue-50 text-left py-2 sm:py-3 px-2 sm:px-4 text-sm sm:text-base font-semibold text-blue-900">
                      <div className="flex items-center">
                        Standard Dev.
                        <HelpCircle size={14} className="ml-1 text-gray-500" />
                      </div>
                    </th>
                  </tr>
                </thead>
                
                {/* Table Body */}
                <tbody>
                  {tableData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="py-2 sm:py-4 px-2 sm:px-4 border-r border-gray-200 text-sm text-gray-700 sticky left-0 z-10 bg-inherit">
                        {row.type}
                      </td>
                      <td className="py-2 sm:py-4 px-2 sm:px-4 border-r border-gray-200 text-sm text-gray-700">
                        {row.currentAvg}
                      </td>
                      <td className="py-2 sm:py-4 px-2 sm:px-4 border-r border-gray-200 text-sm text-gray-700">
                        {row.overallAvg}
                      </td>
                      <td className="py-2 sm:py-4 px-2 sm:px-4 border-r border-gray-200 text-sm text-gray-700">
                        {row.upperLimit}
                      </td>
                      <td className="py-2 sm:py-4 px-2 sm:px-4 border-r border-gray-200 text-sm text-gray-700">
                        {row.lowerLimit}
                      </td>
                      <td className="py-2 sm:py-4 px-2 sm:px-4 text-sm text-gray-700">
                        {row.standardDeviation}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Scroll Indicators */}
          <div className="absolute inset-x-0 bottom-0 h-1 flex">
            <div className="h-full bg-gray-300 w-1/3 rounded-full mx-auto mb-1"></div>
          </div>
        </div>
        
        {/* Mobile Indicator for Scrolling */}
        <div className="mt-2 text-center text-xs text-gray-500 flex items-center justify-center md:hidden">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Scroll to view all data
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AccountOverview;