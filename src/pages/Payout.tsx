import React, { useState } from "react";
import { Info, ChevronDown, RefreshCw } from "lucide-react";

const payoutCards = [
  {
    label: "Withdrawable Profit",
    value: "$0",
    bg: "bg-white",
    border: "border",
  },
  {
    label: "Pending Amount",
    value: "$0",
    bg: "bg-violet-100",
    border: "border-2 border-violet-500",
  },
  {
    label: "Disbursed Amount",
    value: "$0",
    bg: "bg-indigo-50",
    border: "border",
  },
];

const payoutMethods = ["Rise", "USDT", "USDC"];

const PayoutPage = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full p-3 sm:p-4 md:p-6 space-y-4 sm:space-y-6">
      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Left Side: Summary Cards */}
        <div className="bg-white border rounded-xl p-4 sm:p-6 space-y-4 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800">Payout</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-1 xl:grid-cols-3 gap-3 sm:gap-4">
            {payoutCards.map((card, idx) => (
              <div
                key={idx}
                className={`${card.bg} ${card.border} rounded-xl p-3 sm:p-4 flex justify-between items-center`}
              >
                <div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
                    {card.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 mt-1">{card.label}</div>
                </div>
                <div className="text-indigo-700">
                  <Info className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Request + Payout Methods */}
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-indigo-800 to-violet-700 text-white rounded-xl p-4 sm:p-6 space-y-2 shadow">
            <h2 className="text-lg sm:text-xl font-semibold">Request Your Payouts</h2>
            <p className="text-xs sm:text-sm">
              Minimum payout amount for withdrawal is{" "}
              <span className="font-bold">$20</span>
            </p>
            <p className="text-xs sm:text-sm">
              Complete KYC verification to enable payout requests.
            </p>
          </div>

          <div className="border rounded-xl p-4 sm:p-6 bg-white shadow">
            <h3 className="text-base sm:text-lg font-semibold mb-2">Payout Methods</h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-3">
              Your satisfaction is our priority. Discover our supported payout
              methods tailored to your needs.
            </p>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {payoutMethods.map((method) => (
                <div
                  key={method}
                  className="bg-gray-100 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-indigo-700 shadow-sm"
                >
                  {method}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Notes Section - Collapsible on mobile */}
      <div className="bg-indigo-50 border border-indigo-100 rounded-xl shadow-sm overflow-hidden">
        <div 
          className="p-4 sm:p-6 flex justify-between items-center cursor-pointer sm:cursor-default"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <h4 className="font-semibold text-base text-indigo-700">Important Notes:</h4>
          <button className="sm:hidden">
            <ChevronDown className={`w-5 h-5 text-indigo-700 transition-transform ${isExpanded ? "transform rotate-180" : ""}`} />
          </button>
        </div>
        
        <div className={`px-4 pb-4 sm:px-6 sm:pb-6 ${isExpanded ? "block" : "hidden sm:block"}`}>
          <ol className="list-decimal list-inside space-y-1 text-xs sm:text-sm text-gray-700">
            <li className="mb-1">
              The 24 hour payout guarantee will be applicable after you request
              the payout. Make sure to enter correct payout method details. Press
              the{" "}
              <span className="text-indigo-700 font-medium cursor-pointer">
                'Payout Request'
              </span>{" "}
              button to start the 24-hour payout guarantee.
            </li>
            <li className="mb-1">
              You will be able to withdraw the 15% profit share once you make 10%
              growth (for Stellar 1-Step challenge phase and Stellar 2-Step
              Challenge phases) in your FundedNext Account.
            </li>
            <li className="mb-1">
              If your payout request is marked with an Additional Due Diligence
              status due to an incorrect wallet address, please re-submit your
              request.
            </li>
            <li className="mb-1">
              With the first payout, you will receive the Reward Bonus. For
              Stellar Lite, you will get it on the third payout.
            </li>
            <li className="mb-1">
              If you are unable to request the payout, please check your email;
              the Department of Trading Ethics & Standards (
              <a
                href="mailto:trading@fundednext.com"
                className="text-indigo-700 underline"
              >
                trading@fundednext.com
              </a>
              ) may have reached out to you.
            </li>
            <li className="mb-1">
              Please note that a provider fee of up to 3% for all methods will be
              applied to every payout request.
            </li>
          </ol>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
        {/* Header */}
        <div className="flex flex-col xs:flex-row xs:items-center justify-between p-3 sm:p-4 border-b bg-gray-50">
          <div className="flex items-center text-xs sm:text-sm font-semibold text-gray-700">
            <span>Payouts</span>
            <span className="text-indigo-600 ml-2 flex items-center">
              <RefreshCw className="w-3 h-3 mr-1" />
              <span className="hidden xs:inline">Refreshing in</span> 04:34
            </span>
          </div>

          <div className="mt-2 xs:mt-0">
            <div className="flex items-center">
              <label className="text-xs sm:text-sm font-medium text-gray-600 mr-2">Filter:</label>
              <div className="relative inline-block flex-grow">
                <select className="w-full appearance-none border border-gray-300 rounded-md px-2 py-1 sm:px-3 sm:py-1.5 pr-6 sm:pr-8 text-xs sm:text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                  <option>Select Filter</option>
                  <option>Status: Pending</option>
                  <option>Status: Approved</option>
                  <option>Status: Rejected</option>
                </select>
                <ChevronDown className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 text-gray-500 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Table with horizontal scroll on small screens */}
        <div className="overflow-x-auto">
          <table className="min-w-full w-full text-xs sm:text-sm text-left">
            <thead className="bg-gray-100 text-gray-600 font-medium">
              <tr>
                <th className="px-2 sm:px-4 py-2">Login</th>
                <th className="px-2 sm:px-4 py-2">Date</th>
                <th className="px-2 sm:px-4 py-2">Withdrawal ID</th>
                <th className="px-2 sm:px-4 py-2">Requested Amount</th>
                <th className="px-2 sm:px-4 py-2">Account Type</th>
                <th className="px-2 sm:px-4 py-2">Status</th>
                <th className="px-2 sm:px-4 py-2">Disbursed Amount</th>
                <th className="px-2 sm:px-4 py-2">Timer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={8} className="text-center py-8 sm:py-12 text-gray-400">
                  <div className="flex justify-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 sm:w-10 sm:h-10 text-gray-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M21 15V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10m18 0v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2m18 0H3" />
                    </svg>
                  </div>
                  No data
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PayoutPage;