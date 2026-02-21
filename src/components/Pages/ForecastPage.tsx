'use client';

import { TrendingUp, BarChart3, PieChart } from 'lucide-react';
import { useDashboard } from '@/context/DashboardContext';

export default function ForecastPage() {
  const { darkMode, portfolioData } = useDashboard();

  return (
    <div className="space-y-6">
      <h1 className={`text-3xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Forecast</h1>
      
      {/* Key Metrics */}
      <div className="grid grid-cols-3 gap-6">
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'} border p-6`}>
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp size={20} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
            <h3 className={`font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Revenue Growth</h3>
          </div>
          <p className={`text-3xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'} mb-2`}>+12.5%</p>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Expected annual growth</p>
        </div>

        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'} border p-6`}>
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 size={20} className={darkMode ? 'text-green-400' : 'text-green-600'} />
            <h3 className={`font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Occupancy Rate</h3>
          </div>
          <p className={`text-3xl font-bold ${darkMode ? 'text-green-400' : 'text-green-600'} mb-2`}>94%</p>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Projected occupancy</p>
        </div>

        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'} border p-6`}>
          <div className="flex items-center gap-2 mb-4">
            <PieChart size={20} className={darkMode ? 'text-purple-400' : 'text-purple-600'} />
            <h3 className={`font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Market Share</h3>
          </div>
          <p className={`text-3xl font-bold ${darkMode ? 'text-purple-400' : 'text-purple-600'} mb-2`}>8.2%</p>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Regional market share</p>
        </div>
      </div>

      {/* Forecast Table */}
      <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'} border`}>
        <div className={`p-4 border-b ${darkMode ? 'border-gray-700 bg-gray-700' : 'border-gray-300 bg-gray-50'}`}>
          <h3 className={`font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>5-Year Forecast</h3>
        </div>
        <div className="p-6">
          <table className="w-full text-sm">
            <thead>
              <tr className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
                <th className={`text-left py-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Year</th>
                <th className={`text-left py-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Revenue</th>
                <th className={`text-left py-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Growth</th>
                <th className={`text-left py-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Occupancy</th>
              </tr>
            </thead>
            <tbody>
              {[
                { year: '2025', revenue: '$3.2M', growth: '+12.5%', occupancy: '92%' },
                { year: '2026', revenue: '$3.6M', growth: '+12.8%', occupancy: '93%' },
                { year: '2027', revenue: '$4.1M', growth: '+13.2%', occupancy: '94%' },
                { year: '2028', revenue: '$4.6M', growth: '+13.5%', occupancy: '94%' },
                { year: '2029', revenue: '$5.2M', growth: '+13.8%', occupancy: '95%' },
              ].map((row, i) => (
                <tr key={i} className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
                  <td className={`py-3 ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>{row.year}</td>
                  <td className={`py-3 ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>{row.revenue}</td>
                  <td className={`py-3 text-green-600`}>{row.growth}</td>
                  <td className={`py-3 ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>{row.occupancy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
