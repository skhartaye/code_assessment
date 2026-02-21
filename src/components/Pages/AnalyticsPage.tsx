'use client';

import { BarChart3, TrendingUp, PieChart } from 'lucide-react';
import { useDashboard } from '@/context/DashboardContext';

export default function AnalyticsPage() {
  const { darkMode } = useDashboard();

  return (
    <div className="space-y-6">
      <h1 className={`text-3xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Analytics</h1>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-6">
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-blue-50 border-blue-300'} border p-4`}>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Total Properties</p>
          <p className={`text-2xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>15</p>
        </div>
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-green-50 border-green-300'} border p-4`}>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Avg Occupancy</p>
          <p className={`text-2xl font-bold ${darkMode ? 'text-green-400' : 'text-green-600'}`}>92%</p>
        </div>
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-purple-50 border-purple-300'} border p-4`}>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Avg Rent/Unit</p>
          <p className={`text-2xl font-bold ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>$2,850</p>
        </div>
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-orange-50 border-orange-300'} border p-4`}>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>YoY Growth</p>
          <p className={`text-2xl font-bold ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}>+8.3%</p>
        </div>
      </div>

      {/* Performance by Property */}
      <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'} border`}>
        <div className={`p-4 border-b ${darkMode ? 'border-gray-700 bg-gray-700' : 'border-gray-300 bg-gray-50'}`}>
          <h3 className={`font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Performance by Property</h3>
        </div>
        <div className="p-6">
          <table className="w-full text-sm">
            <thead>
              <tr className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
                <th className={`text-left py-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Property</th>
                <th className={`text-left py-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Units</th>
                <th className={`text-left py-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Occupancy</th>
                <th className={`text-left py-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Monthly Revenue</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Carol House', units: 12, occupancy: '95%', revenue: '$34,200' },
                { name: 'Downtown Plaza', units: 18, occupancy: '88%', revenue: '$38,500' },
                { name: 'Riverside Apartments', units: 15, occupancy: '92%', revenue: '$32,100' },
                { name: 'Sunset Towers', units: 20, occupancy: '96%', revenue: '$42,800' },
                { name: 'Midtown Complex', units: 14, occupancy: '89%', revenue: '$29,400' },
              ].map((prop, i) => (
                <tr key={i} className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
                  <td className={`py-3 ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>{prop.name}</td>
                  <td className={`py-3 ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>{prop.units}</td>
                  <td className={`py-3 ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>{prop.occupancy}</td>
                  <td className={`py-3 font-semibold ${darkMode ? 'text-green-400' : 'text-green-600'}`}>{prop.revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
