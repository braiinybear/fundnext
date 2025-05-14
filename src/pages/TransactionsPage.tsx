import React, { useState } from 'react';

const TransactionsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Billing History' | 'Payout History'>('Billing History');

  const billingHeaders = [
    'SN',
    'Account No',
    'Payment Method',
    'Invoice',
    'Status',
    'Date',
    'Transaction ID',
    'Transition Type',
    'Paid Amount',
    'Funding Package',
    'Payment Proof',
  ];

  const payoutHeaders = [
    'SN',
    'Account No',
    'Wallet Address',
    'Methods',
    'Status',
    'Disbursed Date',
    'Amount',
  ];

  const headers = activeTab === 'Billing History' ? billingHeaders : payoutHeaders;

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-6">Billing-Payment Method</h2>

      <div className="flex gap-6">
        {/* Sidebar Card */}
        <div className="w-64 bg-white rounded-xl shadow p-4">
          <div className="font-semibold text-lg mb-4">Transactions</div>
          <ul>
            {['Billing History', 'Payout History'].map((tab) => (
              <li
                key={tab}
                className={`cursor-pointer px-4 py-3 rounded-lg ${
                  activeTab === tab
                    ? 'bg-indigo-50 border-l-4 border-indigo-600 text-indigo-600 font-semibold'
                    : 'hover:bg-gray-50 text-gray-700'
                }`}
                onClick={() => setActiveTab(tab as 'Billing History' | 'Payout History')}
              >
                {tab}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content Card */}
       <div className="flex-1 bg-white rounded-xl shadow p-6">
  <div className="flex justify-between items-center mb-6 border-b pb-4">
    <h3 className="text-2xl font-bold text-gray-800">{activeTab}</h3>
    <span className="text-2xl text-indigo-700 font-bold">Total Amount: $0</span>
  </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm border-separate border-spacing-y-2">
              <thead className="bg-gray-100 text-gray-700 font-semibold">
                <tr>
                  {headers.map((header) => (
                    <th key={header} className="px-4 py-2 whitespace-nowrap">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td colSpan={headers.length} className="py-10 text-gray-400">
                    <div className="flex flex-col items-center">
                      <span className="material-symbols-outlined text-4xl">print</span>
                      <span className="mt-2">No data</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionsPage;
