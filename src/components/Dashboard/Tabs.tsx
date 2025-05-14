// src/components/Tabs.tsx
import React, { useState } from 'react';
import AccountCard from './AccountCard';

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('cfds');

  const tabs: Tab[] = [
    {
      id: 'cfds',
      label: 'CFDs',
      content: (
        <div>
          <h4 className="text-gray-500 text-lg font-semibold mb-4">Your CFD Accounts</h4>
          <AccountCard />
        </div>
      ),
    },
    {
      id: 'futures',
      label: 'Futures',
      content: (
        <div>
          <h4 className="text-gray-500 text-lg font-semibold mb-4">Your Futures Accounts</h4>
          <AccountCard />
        </div>
      ),
    },
  ];

  const currentTab = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className="px-6">
      {/* Tabs Header */}
      <div className="border-b border-gray-200">
        <div className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`py-4 px-1 border-b-2 font-medium text-lg ${
                activeTab === tab.id
                  ? 'border-indigo-500 text-indigo-500'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Active Tab Content */}
      <div className="mt-6">{currentTab?.content}</div>
    </div>
  );
};

export default Tabs;
