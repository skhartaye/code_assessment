'use client';

import { useDashboard } from '@/context/DashboardContext';

export default function ManagersPage() {
  const { darkMode } = useDashboard();

  return (
    <div className={`${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-300'} border p-8 transition-colors`}>
      <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Managers</h1>
      <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Manage your property and investment managers.</p>
      
      <div className={`mt-6 space-y-4`}>
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'} border p-4`}>
          <div className="flex justify-between items-center">
            <div>
              <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>John Smith</p>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Property Manager</p>
              <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>john.smith@redpoint.com</p>
            </div>
            <span className={`text-xs px-3 py-1 ${darkMode ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-700'}`}>Active</span>
          </div>
        </div>
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'} border p-4`}>
          <div className="flex justify-between items-center">
            <div>
              <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Sarah Johnson</p>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Investment Advisor</p>
              <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>sarah.johnson@redpoint.com</p>
            </div>
            <span className={`text-xs px-3 py-1 ${darkMode ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-700'}`}>Active</span>
          </div>
        </div>
      </div>
    </div>
  );
}
