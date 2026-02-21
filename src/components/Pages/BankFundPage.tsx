'use client';

import { useDashboard } from '@/context/DashboardContext';

export default function BankFundPage() {
  const { darkMode } = useDashboard();

  return (
    <div className={`${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-300'} border p-8 transition-colors`}>
      <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Bank Fund</h1>
      <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Monitor your bank accounts and liquid assets.</p>
      
      <div className={`mt-6 space-y-4`}>
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'} border p-4`}>
          <div className="flex justify-between items-center">
            <div>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Primary Checking</p>
              <p className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>$45,230.50</p>
            </div>
            <span className={`text-xs px-3 py-1 ${darkMode ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-700'}`}>Active</span>
          </div>
        </div>
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'} border p-4`}>
          <div className="flex justify-between items-center">
            <div>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Savings Account</p>
              <p className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>$125,000.00</p>
            </div>
            <span className={`text-xs px-3 py-1 ${darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-700'}`}>Earning 4.5%</span>
          </div>
        </div>
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'} border p-4`}>
          <div className="flex justify-between items-center">
            <div>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Money Market</p>
              <p className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>$250,000.00</p>
            </div>
            <span className={`text-xs px-3 py-1 ${darkMode ? 'bg-purple-900 text-purple-200' : 'bg-purple-100 text-purple-700'}`}>Earning 5.2%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
