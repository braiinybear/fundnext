import { ChevronDown, RefreshCw } from "lucide-react";

const PayoutTable = () => {
  return (
    <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
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
            <label className="text-xs sm:text-sm font-medium text-gray-600 mr-2">
              Filter:
            </label>
            <div className="relative inline-block">
              <select className="appearance-none border border-gray-300 rounded-md px-2 py-1 pr-6 text-xs sm:text-sm focus:ring-2 focus:ring-indigo-500">
                <option>Select Filter</option>
                <option>Status: Pending</option>
                <option>Status: Approved</option>
                <option>Status: Rejected</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 text-gray-500 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-xs sm:text-sm text-left">
          <thead className="bg-gray-100 text-gray-600 font-medium">
            <tr>
              <th className="px-4 py-2">Login</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Withdrawal ID</th>
              <th className="px-4 py-2">Requested Amount</th>
              <th className="px-4 py-2">Account Type</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Disbursed Amount</th>
              <th className="px-4 py-2">Timer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={8} className="text-center py-12 text-gray-400">
                No data
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PayoutTable;
