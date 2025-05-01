import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { currentUser } from '../data/mockData';
import { useSidebarStore } from '../store/sidebar';

const MainLayout: React.FC = () => {
  const { isExpanded } = useSidebarStore();

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="fixed inset-y-0">
        <Sidebar />
      </div>
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          isExpanded ? 'ml-[240px]' : 'ml-[80px]'
        }`}
      >
        <Header user={currentUser} />
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
