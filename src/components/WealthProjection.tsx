'use client';

import { useState } from 'react';
import { Settings } from 'lucide-react';
import { useDashboard } from '@/context/DashboardContext';
import Modal from '@/components/Modal';

export default function WealthProjection() {
  const { darkMode, portfolioData } = useDashboard();
  const [showSettings, setShowSettings] = useState(false);

  // Scenario data for the chart
  const years = ['2025', '2027', '2029', '2031', '2033', '2035', '2037', '2039', '2041', '2043', '2045'];
  const likelyScenario = [13.1, 15.2, 17.8, 20.5, 23.8, 27.5, 31.8, 36.9, 42.8, 49.5, 57.3];
  const optimisticScenario = [13.1, 16.5, 20.2, 24.8, 30.5, 37.2, 45.3, 55.2, 67.3, 82.1, 100.2];
  const conservativeScenario = [13.1, 14.2, 15.5, 16.9, 18.5, 20.2, 22.1, 24.2, 26.5, 29.0, 31.8];

  const maxValue = Math.max(...optimisticScenario);

  return (
    <>
      <div className={`${darkMode ? 'bg-teal-900 border-teal-700' : 'bg-teal-500 border-teal-600'} border transition-colors`}>
        {/* Header */}
        <div className={`flex justify-between items-center p-4 border-b ${darkMode ? 'border-teal-700' : 'border-teal-600'}`}>
          <div className="flex items-center gap-2">
            <span className="text-lg">📈</span>
            <p className={`text-sm font-semibold ${darkMode ? 'text-teal-200' : 'text-white'}`}>Wealth Projection</p>
          </div>
          <button 
            onClick={() => setShowSettings(true)}
            className={`px-3 py-1 text-sm font-semibold ${darkMode ? 'bg-teal-800 hover:bg-teal-700 text-teal-200' : 'bg-white hover:bg-gray-100 text-teal-600'} transition border flex items-center gap-1`}
          >
            <Settings size={16} /> SETTINGS
          </button>
        </div>

        {/* Content */}
        <div className={`p-6 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
          {/* Amount */}
          <div className="mb-6">
            <h2 className={`text-4xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-1`}>
              ${portfolioData.totalWealth.toLocaleString('en-US', { maximumFractionDigits: 2 })}
            </h2>
            <p className={`text-sm ${darkMode ? 'text-teal-300' : 'text-teal-700'}`}>
              • +$61,106,056.71 (+466.3%) ALL TIME
            </p>
          </div>

          {/* Chart */}
          <div className="flex gap-4 mb-6">
            {/* Y-axis labels */}
            <div className="flex flex-col justify-between text-xs w-16">
              <div className={darkMode ? 'text-gray-500' : 'text-gray-600'}>$100.0M</div>
              <div className={darkMode ? 'text-gray-500' : 'text-gray-600'}>$75.0M</div>
              <div className={darkMode ? 'text-gray-500' : 'text-gray-600'}>$50.0M</div>
              <div className={darkMode ? 'text-gray-500' : 'text-gray-600'}>$25.0M</div>
              <div className={darkMode ? 'text-gray-500' : 'text-gray-600'}>$0</div>
            </div>

            {/* Chart area */}
            <div className="flex-1">
              <svg viewBox="0 0 1000 300" className="w-full h-64" preserveAspectRatio="none">
                {/* Grid lines */}
                <line x1="0" y1="0" x2="1000" y2="0" stroke={darkMode ? '#444' : '#ddd'} strokeWidth="1"/>
                <line x1="0" y1="75" x2="1000" y2="75" stroke={darkMode ? '#444' : '#ddd'} strokeWidth="1"/>
                <line x1="0" y1="150" x2="1000" y2="150" stroke={darkMode ? '#444' : '#ddd'} strokeWidth="1"/>
                <line x1="0" y1="225" x2="1000" y2="225" stroke={darkMode ? '#444' : '#ddd'} strokeWidth="1"/>
                <line x1="0" y1="300" x2="1000" y2="300" stroke={darkMode ? '#666' : '#999'} strokeWidth="2"/>

                {/* Conservative scenario (bottom) */}
                <path
                  d={`M ${conservativeScenario.map((v, i) => `${(i / (conservativeScenario.length - 1)) * 1000},${300 - (v / maxValue) * 300}`).join(' L ')} L 1000,300 L 0,300 Z`}
                  fill={darkMode ? '#4a7c7e' : '#a8d5d5'}
                  opacity="0.6"
                />

                {/* Optimistic scenario (top) */}
                <path
                  d={`M ${optimisticScenario.map((v, i) => `${(i / (optimisticScenario.length - 1)) * 1000},${300 - (v / maxValue) * 300}`).join(' L ')} L 1000,300 L 0,300 Z`}
                  fill={darkMode ? '#2d9b9e' : '#5ec9cc'}
                  opacity="0.4"
                />

                {/* Likely scenario (middle line) */}
                <polyline
                  points={likelyScenario.map((v, i) => `${(i / (likelyScenario.length - 1)) * 1000},${300 - (v / maxValue) * 300}`).join(' ')}
                  fill="none"
                  stroke={darkMode ? '#7dd3d6' : '#20b2aa'}
                  strokeWidth="2"
                />
              </svg>

              {/* X-axis labels */}
              <div className="flex justify-between text-xs mt-2">
                {years.map((year, i) => (
                  <div key={i} className={darkMode ? 'text-gray-500' : 'text-gray-600'}>{year}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Legend and Info */}
          <div className="flex gap-4">
            {/* Legend */}
            <div className={`text-xs space-y-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <div>🟦 Likely Scenario: $12.4M-$76.2M</div>
              <div>🟩 Optimistic Scenario: $12.4M-$89.7M</div>
              <div>🟩 Conservative Scenario: $12.4M-$34.4M</div>
            </div>

            {/* Info box */}
            <div className={`flex-1 p-4 ${darkMode ? 'bg-teal-800 border-teal-700' : 'bg-teal-400 border-teal-500'} border flex gap-3`}>
              <div className="text-2xl">🏠</div>
              <p className={`text-sm ${darkMode ? 'text-teal-100' : 'text-white'}`}>
                In 20 years, we project your portfolio will be worth around $74.2M
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Settings Modal */}
      <Modal
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
        title="Wealth Projection Settings"
      >
        <div className="space-y-4">
          <div>
            <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
              Projection Period
            </label>
            <select className={`w-full px-3 py-2 border ${darkMode ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-teal-500`}>
              <option>10 Years</option>
              <option>20 Years</option>
              <option>30 Years</option>
            </select>
          </div>
          <div>
            <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
              Risk Profile
            </label>
            <select className={`w-full px-3 py-2 border ${darkMode ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-teal-500`}>
              <option>Conservative</option>
              <option>Moderate</option>
              <option>Aggressive</option>
            </select>
          </div>
          <div className="flex gap-3 justify-end">
            <button
              onClick={() => setShowSettings(false)}
              className={`px-4 py-2 border ${darkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50'} transition`}
            >
              Cancel
            </button>
            <button
              onClick={() => setShowSettings(false)}
              className="px-4 py-2 bg-teal-600 text-white hover:bg-teal-700 transition"
            >
              Save Settings
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
