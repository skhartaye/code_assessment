'use client';

import { useDashboard } from '@/context/DashboardContext';

export default function ReportsPage() {
  const { darkMode } = useDashboard();

  return (
    <div className={`${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-300'} border p-8 transition-colors`}>
      <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Reports</h1>
      <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>View and download your financial reports.</p>
      
      <div className={`mt-6 space-y-4`}>
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'} border p-4 flex justify-between items-center`}>
          <div>
            <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Annual Report 2024</p>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Generated on Jan 15, 2025</p>
          </div>
          <button className={`px-4 py-2 ${darkMode ? 'bg-blue-900 text-blue-200 hover:bg-blue-800' : 'bg-blue-100 text-blue-700 hover:bg-blue-200'} transition`}>Download</button>
        </div>
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'} border p-4 flex justify-between items-center`}>
          <div>
            <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Q4 2024 Summary</p>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Generated on Jan 10, 2025</p>
          </div>
          <button className={`px-4 py-2 ${darkMode ? 'bg-blue-900 text-blue-200 hover:bg-blue-800' : 'bg-blue-100 text-blue-700 hover:bg-blue-200'} transition`}>Download</button>
        </div>
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'} border p-4 flex justify-between items-center`}>
          <div>
            <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Tax Summary 2024</p>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Generated on Dec 28, 2024</p>
          </div>
          <button className={`px-4 py-2 ${darkMode ? 'bg-blue-900 text-blue-200 hover:bg-blue-800' : 'bg-blue-100 text-blue-700 hover:bg-blue-200'} transition`}>Download</button>
        </div>
      </div>
    </div>
  );
}
