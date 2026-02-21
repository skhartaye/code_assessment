'use client';

import { useState } from 'react';
import { Clock } from 'lucide-react';
import { useDashboard } from '@/context/DashboardContext';

export default function SpendingAnalytics() {
  const { darkMode } = useDashboard();
  const [category, setCategory] = useState('Repairs & Maintenance');
  const [timeframe, setTimeframe] = useState('Last 3 Months');

  // Different data based on category and timeframe
  const categoryData: Record<string, Record<string, { chartData: number[], spending: number, percentage: number }>> = {
    'Repairs & Maintenance': {
      'Last 3 Months': { chartData: [25, 40, 35, 50, 45, 60, 50, 65, 55, 80, 70, 75], spending: 0, percentage: 0.0 },
      'Last 6 Months': { chartData: [20, 35, 30, 45, 40, 55, 45, 60, 50, 75, 65, 70, 30, 40, 35, 50], spending: 5000, percentage: 0.8 },
      'Last Year': { chartData: [15, 30, 25, 40, 35, 50, 40, 55, 45, 70, 60, 65, 25, 35, 30, 45, 35, 50, 40, 55], spending: 12000, percentage: 1.2 },
    },
    'Utilities': {
      'Last 3 Months': { chartData: [45, 50, 48, 52, 50, 55, 52, 58, 55, 60, 58, 62], spending: 8500, percentage: 1.5 },
      'Last 6 Months': { chartData: [40, 45, 43, 48, 46, 51, 48, 54, 51, 56, 54, 58, 45, 50, 48, 52], spending: 15000, percentage: 1.8 },
      'Last Year': { chartData: [35, 40, 38, 43, 41, 46, 43, 49, 46, 51, 49, 53, 40, 45, 43, 48, 46, 51, 48, 54], spending: 28000, percentage: 2.1 },
    },
    'Repairs': {
      'Last 3 Months': { chartData: [60, 65, 62, 68, 65, 72, 68, 75, 72, 80, 78, 85], spending: 15000, percentage: 2.5 },
      'Last 6 Months': { chartData: [55, 60, 57, 63, 60, 67, 63, 70, 67, 75, 73, 80, 60, 65, 62, 68], spending: 28000, percentage: 2.8 },
      'Last Year': { chartData: [50, 55, 52, 58, 55, 62, 58, 65, 62, 70, 68, 75, 55, 60, 57, 63, 60, 67, 63, 70], spending: 52000, percentage: 3.2 },
    },
  };

  const data = categoryData[category]?.[timeframe] || categoryData['Repairs & Maintenance']['Last 3 Months'];
  const chartData = data.chartData;
  const maxValue = Math.max(...chartData);
  const years = ['2025', '2027', '2029', '2031', '2033', '2035', '2037', '2039', '2041', '2043', '2045'];

  return (
    <div className={`${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-yellow-100 border-yellow-400'} border shadow-sm transition-colors`}>
      <div className={`p-4 border-b ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-yellow-400 bg-yellow-200'} flex justify-between items-center`}>
        <div className="flex items-center gap-2">
          <Clock size={20} className={darkMode ? 'text-gray-300' : 'text-yellow-900'} />
          <h3 className={`font-semibold ${darkMode ? 'text-gray-100' : 'text-yellow-900'}`}>Spending Analytics</h3>
        </div>
        <div className="flex gap-2">
          <select 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={`px-3 py-1 text-sm font-medium border cursor-pointer hover:opacity-80 transition ${
              darkMode
                ? 'bg-gray-700 border-gray-600 text-gray-200'
                : 'bg-white border-yellow-400 text-gray-700'
            }`}
          >
            <option>Repairs & Maintenance</option>
            <option>Utilities</option>
            <option>Repairs</option>
          </select>
          <select 
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
            className={`px-3 py-1 text-sm font-medium border cursor-pointer hover:opacity-80 transition ${
              darkMode
                ? 'bg-gray-700 border-gray-600 text-gray-200'
                : 'bg-white border-yellow-400 text-gray-700'
            }`}
          >
            <option>Last 3 Months</option>
            <option>Last 6 Months</option>
            <option>Last Year</option>
          </select>
        </div>
      </div>

      <div className={`p-6 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        {/* Y-axis labels and chart */}
        <div className="flex gap-4 mb-6">
          {/* Y-axis */}
          <div className="flex flex-col justify-between text-xs text-gray-600 w-12">
            <div>$100M</div>
            <div>$75M</div>
            <div>$50M</div>
            <div>$25M</div>
            <div>$0</div>
          </div>

          {/* Chart area with grid */}
          <div className="flex-1">
            <div className={`relative h-64 border-l border-b ${darkMode ? 'border-gray-700' : 'border-gray-400'}`}>
              {/* Grid lines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div key={i} className={`border-t ${darkMode ? 'border-gray-700' : 'border-gray-300'} w-full`}></div>
                ))}
              </div>

              {/* Bars */}
              <div className="absolute inset-0 flex items-end justify-between px-2 pb-2">
                {chartData.map((value, i) => (
                  <div
                    key={i}
                    className={`flex-1 border mx-1 transition hover:opacity-80 ${
                      darkMode
                        ? 'bg-yellow-600 border-yellow-700'
                        : 'bg-yellow-400 border-yellow-600'
                    }`}
                    style={{ height: `${(value / maxValue) * 100}%` }}
                  />
                ))}
              </div>
            </div>

            {/* X-axis labels */}
            <div className="flex justify-between text-xs text-gray-600 mt-2 px-2">
              {years.slice(0, Math.min(11, chartData.length)).map((year, i) => (
                <div key={i}>{year}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Info section */}
        <div className="flex gap-4">
          <div className={`flex-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <p>Your "{category}" spend is ${data.spending.toLocaleString()} in the {timeframe.toLowerCase()} which represents {data.percentage.toFixed(1)}% of your yearly revenue.</p>
          </div>
          <div style={{ backgroundColor: '#F6C158' }} className={`border border-yellow-600 p-4 flex gap-3 flex-1`}>
            <div className="text-2xl">🔧</div>
            <p className={`text-sm ${darkMode ? 'text-yellow-100' : 'text-gray-800'}`}>
              This is {100 - (data.percentage * 10)}% less than your projected 8.0%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
