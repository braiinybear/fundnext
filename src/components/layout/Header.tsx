// src/components/Header.tsx
import React from 'react';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="bg-white shadow-sm z-10">
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex items-center space-x-3">
          <button
            onClick={toggleSidebar}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <button className="flex items-center text-sm focus:outline-none">
              <span className="mr-2 text-gray-700">Chander Praka</span>
              <img
                className="h-8 w-8 rounded-full bg-gray-200"
                src="https://via.placeholder.com/32"
                alt="User"
              />
              <span className="material-symbols-outlined text-gray-500 ml-1">
                expand_more
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
