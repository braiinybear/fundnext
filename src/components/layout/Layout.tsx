import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

interface LayoutProps {
    children: React.ReactNode
  }
  
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <div className="flex h-screen bg-gray-100 relative">
      {/* Sidebar: fixed on small screens */}
      <div
        className={`
          fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity md:hidden 
          ${sidebarOpen ? 'block' : 'hidden'}
        `}
        onClick={toggleSidebar}
      ></div>
      
      <div className={`
        fixed z-50 md:static md:translate-x-0 transition-transform duration-300 h-full
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
      `}>
        <Sidebar collapsed={false} />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header toggleSidebar={toggleSidebar} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout