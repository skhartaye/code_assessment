'use client';

import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import Modal from '@/components/Modal';
import OverviewPage from '@/components/Pages/OverviewPage';
import ForecastPage from '@/components/Pages/ForecastPage';
import AnalyticsPage from '@/components/Pages/AnalyticsPage';
import BacklogPage from '@/components/Pages/BacklogPage';
import SinksPage from '@/components/Pages/SinksPage';
import BankFundPage from '@/components/Pages/BankFundPage';
import CryptoPage from '@/components/Pages/CryptoPage';
import ManagersPage from '@/components/Pages/ManagersPage';
import ReportsPage from '@/components/Pages/ReportsPage';
import SettingsPage from '@/components/Pages/SettingsPage';
import { useDashboard } from '@/context/DashboardContext';

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showNotificationsModal, setShowNotificationsModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showAccountModal, setShowAccountModal] = useState(false);
  const [newItemName, setNewItemName] = useState('');
  const { currentPage, darkMode } = useDashboard();

  const handleAddNew = () => {
    setShowAddModal(true);
  };

  const handleAddItem = () => {
    if (newItemName.trim()) {
      setNewItemName('');
      setShowAddModal(false);
      alert(`Added: ${newItemName}`);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'overview':
        return <OverviewPage />;
      case 'forecast':
        return <ForecastPage />;
      case 'analytics':
        return <AnalyticsPage />;
      case 'backlog':
        return <BacklogPage />;
      case 'sinks':
        return <SinksPage />;
      case 'bank':
        return <BankFundPage />;
      case 'crypto':
        return <CryptoPage />;
      case 'managers':
        return <ManagersPage />;
      case 'reports':
        return <ReportsPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <OverviewPage />;
    }
  };

  return (
    <div className={`flex h-screen ${darkMode ? 'bg-gray-950' : 'bg-gray-100'} transition-colors`}>
      <Sidebar open={sidebarOpen} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header 
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
          onSearchClick={() => setShowSearchModal(true)}
          onNotificationClick={() => setShowNotificationsModal(true)}
          onSettingsClick={() => setShowSettingsModal(true)}
          onAccountClick={() => setShowAccountModal(true)}
        />
        <main className={`flex-1 overflow-auto ${darkMode ? 'bg-gray-950' : 'bg-gray-100'} transition-colors p-6`}>
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Greeting Section */}
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold text-amber-700">Good Morning, Michael</h1>
              <button 
                onClick={handleAddNew}
                className="bg-amber-100 text-amber-700 px-4 py-2 font-semibold hover:bg-amber-200 transition shadow-sm border border-amber-300"
              >
                + ADD NEW
              </button>
            </div>

            {/* Page Content */}
            {renderPage()}
          </div>
        </main>
      </div>

      {/* Add New Modal */}
      <Modal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        title="Add New Item"
      >
        <div className="space-y-4">
          <div>
            <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
              Item Name
            </label>
            <input
              type="text"
              value={newItemName}
              onChange={(e) => setNewItemName(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAddItem()}
              placeholder="Enter item name..."
              className={`w-full px-3 py-2 border ${darkMode ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'} focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors`}
              autoFocus
            />
          </div>
          <div className="flex gap-3 justify-end">
            <button
              onClick={() => setShowAddModal(false)}
              className={`px-4 py-2 border ${darkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50'} transition`}
            >
              Cancel
            </button>
            <button
              onClick={handleAddItem}
              className="px-4 py-2 bg-amber-600 text-white hover:bg-amber-700 transition"
            >
              Add Item
            </button>
          </div>
        </div>
      </Modal>

      {/* Search Modal */}
      <Modal
        isOpen={showSearchModal}
        onClose={() => setShowSearchModal(false)}
        title="Search"
      >
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Search properties, transactions, reports..."
            className={`w-full px-3 py-2 border ${darkMode ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'} focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors`}
            autoFocus
          />
          <div className={`space-y-2 max-h-64 overflow-y-auto`}>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Recent searches:</p>
            <div className={`text-sm ${darkMode ? 'text-gray-500 hover:text-gray-400' : 'text-gray-600 hover:text-gray-700'} cursor-pointer`}>Carol House - 250 Robson Street</div>
            <div className={`text-sm ${darkMode ? 'text-gray-500 hover:text-gray-400' : 'text-gray-600 hover:text-gray-700'} cursor-pointer`}>Annual Revenue Report</div>
            <div className={`text-sm ${darkMode ? 'text-gray-500 hover:text-gray-400' : 'text-gray-600 hover:text-gray-700'} cursor-pointer`}>Maintenance Schedule</div>
          </div>
        </div>
      </Modal>

      {/* Notifications Modal */}
      <Modal
        isOpen={showNotificationsModal}
        onClose={() => setShowNotificationsModal(false)}
        title="Notifications"
      >
        <div className="space-y-3 max-h-64 overflow-y-auto">
          <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'} border p-3`}>
            <p className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>New rent payment received</p>
            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>2 hours ago</p>
          </div>
          <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'} border p-3`}>
            <p className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Maintenance reminder</p>
            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Quarterly inspection due</p>
          </div>
          <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'} border p-3`}>
            <p className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Portfolio update</p>
            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Your wealth increased by $5,000</p>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={showSettingsModal}
        onClose={() => setShowSettingsModal(false)}
        title="Settings"
      >
        <div className="space-y-4">
          <div>
            <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
              Theme
            </label>
            <select className={`w-full px-3 py-2 border ${darkMode ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-blue-500`}>
              <option>Light Mode</option>
              <option>Dark Mode</option>
              <option>Auto</option>
            </select>
          </div>
          <div>
            <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
              Notifications
            </label>
            <input type="checkbox" defaultChecked className="mr-2" />
            <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Enable notifications</span>
          </div>
          <div className="flex gap-3 justify-end">
            <button
              onClick={() => setShowSettingsModal(false)}
              className={`px-4 py-2 border ${darkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50'} transition`}
            >
              Cancel
            </button>
            <button
              onClick={() => setShowSettingsModal(false)}
              className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Save
            </button>
          </div>
        </div>
      </Modal>

      {/* Account Modal */}
      <Modal
        isOpen={showAccountModal}
        onClose={() => setShowAccountModal(false)}
        title="Account"
      >
        <div className="space-y-4">
          <div>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Name</p>
            <p className={`text-lg font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Michael Johnson</p>
          </div>
          <div>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Email</p>
            <p className={`text-lg font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>michael@redpoint.com</p>
          </div>
          <div>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Member Since</p>
            <p className={`text-lg font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>January 2023</p>
          </div>
          <div className="flex gap-3 justify-end">
            <button
              onClick={() => setShowAccountModal(false)}
              className={`px-4 py-2 border ${darkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50'} transition`}
            >
              Close
            </button>
            <button
              onClick={() => setShowAccountModal(false)}
              className="px-4 py-2 bg-red-600 text-white hover:bg-red-700 transition"
            >
              Sign Out
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
