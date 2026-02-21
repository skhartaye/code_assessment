'use client';

import { useDashboard } from '@/context/DashboardContext';

export default function SettingsPage() {
  const { darkMode, setDarkMode } = useDashboard();

  return (
    <div className={`${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-300'} border p-8 transition-colors`}>
      <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>Settings</h1>
      
      <div className={`space-y-6`}>
        {/* Theme Settings */}
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'} border p-4`}>
          <h2 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Appearance</h2>
          <div className="flex items-center justify-between">
            <div>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Dark Mode</p>
              <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>Toggle dark mode theme</p>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`relative w-12 h-6 rounded-full transition ${darkMode ? 'bg-blue-600' : 'bg-gray-300'}`}
            >
              <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition ${darkMode ? 'right-1' : 'left-1'}`}></div>
            </button>
          </div>
        </div>

        {/* Notification Settings */}
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'} border p-4`}>
          <h2 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Notifications</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Email Notifications</p>
              <input type="checkbox" defaultChecked className="w-4 h-4" />
            </div>
            <div className="flex items-center justify-between">
              <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Push Notifications</p>
              <input type="checkbox" defaultChecked className="w-4 h-4" />
            </div>
            <div className="flex items-center justify-between">
              <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>SMS Alerts</p>
              <input type="checkbox" className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Account Settings */}
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'} border p-4`}>
          <h2 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Account</h2>
          <div className="space-y-3">
            <button className={`w-full px-4 py-2 ${darkMode ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-gray-200 text-gray-900 hover:bg-gray-300'} transition`}>
              Change Password
            </button>
            <button className={`w-full px-4 py-2 ${darkMode ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-gray-200 text-gray-900 hover:bg-gray-300'} transition`}>
              Two-Factor Authentication
            </button>
            <button className={`w-full px-4 py-2 ${darkMode ? 'bg-red-900 text-red-200 hover:bg-red-800' : 'bg-red-100 text-red-700 hover:bg-red-200'} transition`}>
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
