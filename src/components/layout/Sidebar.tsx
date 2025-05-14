import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

interface NavItem {
  icon: string;
  label: string;
  to?: string;
  badge?: string;
  hasDropdown?: boolean;
}

interface SidebarProps {
  collapsed: boolean;
}

// Hide scrollbars
const hideScrollbarStyle = `
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

const Sidebar: React.FC<SidebarProps> = ({ collapsed }) => {
  const navItems: NavItem[] = [
    { icon: 'grid_view', label: 'Accounts', to: '/account' },
    { icon: 'receipt_long', label: 'Transactions', to: '/transactions' },
    { icon: 'payments', label: 'Payout', to: '/payout' },
    { icon: 'emoji_events', label: 'Competition', to: '/competition' },
    { icon: 'people', label: 'Refer & Earn', badge: 'New', to: '/refer' },
    { icon: 'local_offer', label: 'My Offers', to: '/offers' },
    { icon: 'description', label: 'Files', to: '/files' },
    { icon: 'attach_money', label: 'Symbols', to: '/symbols' },
    { icon: 'calculate', label: 'Calculator', to: '/calculator' },
    { icon: 'calendar_today', label: 'Calendar', to: '/calendar' },
    { icon: 'stars', label: 'Infinity Points', hasDropdown: true, to: '/infinity-points' },
    { icon: 'confirmation_number', label: 'Tickets', to: '/tickets' },
    { icon: 'help', label: 'FAQ', hasDropdown: true, to: '/faq' },
  ];

  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = hideScrollbarStyle;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
   <aside className="w-60 bg-indigo-950 text-white flex flex-col h-full">

      <div className="p-4 flex items-center justify-center">
        {collapsed ? (
          <span className="text-2xl font-bold">FN</span>
        ) : (
          <span className="text-xl font-bold text-white">FUNDEDNEXT</span>
        )}
      </div>

      <nav className="flex-1 overflow-hidden hover:overflow-y-auto no-scrollbar">
        <ul className="px-2">
          {navItems.map((item, index) => (
            <li key={index} className="mb-1 py-0">
              <NavLink
                to={item.to || '#'}
                className={({ isActive }) =>
                  `flex items-center ${
                    collapsed ? 'justify-center' : 'px-4'
                  } py-3 text-sm rounded-lg transition-colors ${
                    isActive
                      ? 'bg-indigo-500 text-white'
                      : 'text-gray-300 hover:bg-indigo-800 hover:text-white'
                  }`
                }
                title={collapsed ? item.label : ''}
              >
                <span className={`material-symbols-outlined ${collapsed ? 'text-xl' : 'flex-shrink-0'}`}>
                  {item.icon}
                </span>
                {!collapsed && (
                  <div className="flex flex-1 items-center justify-between ml-3">
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="bg-indigo-700 text-xs rounded px-2 py-0.5">
                        {item.badge}
                      </span>
                    )}
                    {item.hasDropdown && (
                      <span className="material-symbols-outlined text-sm">expand_more</span>
                    )}
                  </div>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className={`p-4 ${collapsed ? 'flex justify-center' : ''}`}>
        <button 
          className={`${
            collapsed ? 'w-12 h-12 rounded-full flex justify-center items-center' : 'w-full py-2 rounded-lg'
          } bg-indigo-600 text-white hover:bg-indigo-700 transition-colors`}
          title={collapsed ? 'Start Challenge' : ''}
        >
          {collapsed ? (
            <span className="material-symbols-outlined">flag</span>
          ) : (
            'Start Challenge'
          )}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;