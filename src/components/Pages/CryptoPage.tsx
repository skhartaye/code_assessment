'use client';

import { useDashboard } from '@/context/DashboardContext';

export default function CryptoPage() {
  const { darkMode } = useDashboard();

  return (
    <div className={`${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-300'} border p-8 transition-colors`}>
      <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Crypto</h1>
      <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Track your cryptocurrency portfolio.</p>
      
      <div className={`mt-6 space-y-4`}>
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'} border p-4`}>
          <div className="flex justify-between items-center">
            <div>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Bitcoin</p>
              <p className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>0.5 BTC</p>
              <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>≈ $21,500</p>
            </div>
            <span className={`text-xs px-3 py-1 ${darkMode ? 'bg-orange-900 text-orange-200' : 'bg-orange-100 text-orange-700'}`}>+5.2%</span>
          </div>
        </div>
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'} border p-4`}>
          <div className="flex justify-between items-center">
            <div>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Ethereum</p>
              <p className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>5 ETH</p>
              <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>≈ $9,500</p>
            </div>
            <span className={`text-xs px-3 py-1 ${darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-700'}`}>+3.1%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
