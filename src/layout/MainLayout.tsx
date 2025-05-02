import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { currentUser } from '../data/mockData';
import { useSidebarStore } from '../store/sidebar';

const MainLayout: React.FC = () => {
  const { isExpanded, toggle } = useSidebarStore();

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className={`fixed inset-0 z-50 lg:hidden ${isExpanded ? 'block' : 'hidden'}`}>
        <div className="absolute inset-0 bg-black bg-opacity-50" onClick={toggle} />
        <Sidebar />
      </div>

      <div className="hidden lg:fixed lg:inset-y-0 lg:flex">
        <Sidebar />
      </div>

      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          isExpanded ? 'lg:ml-[240px]' : 'lg:ml-[80px]'
        }`}
      >
        <Header user={currentUser} onMenuClick={toggle} />
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
