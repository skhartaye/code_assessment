'use client';

import React from 'react';
import { TrendingUp, Settings } from 'lucide-react';

export default function WealthProjection() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <TrendingUp size={20} className="text-teal-500" />
          <h3 className="font-semibold text-gray-800">Wealth Projections</h3>
        </div>
        <button className="text-gray-500 hover:text-gray-700">
          <Settings size={18} />
        </button>
      </div>

      <div className="mb-6">
        <div className="text-4xl font-bold text-gray-900 mb-2">$13,107,926.29</div>
        <p className="text-xs text-gray-500">+ $601, 306, 391, 73 | +$601, 306, 391, 73 | ALL TIME</p>
      </div>

      {/* Chart Placeholder */}
      <div className="h-48 bg-gradient-to-t from-teal-200 to-teal-100 rounded-lg mb-4 flex items-end justify-between px-4 pb-4">
        <div className="flex gap-1 items-end h-full">
          {[30, 45, 35, 50, 40, 55, 45, 60, 50, 65].map((height, i) => (
            <div
              key={i}
              className="flex-1 bg-teal-400 rounded-t opacity-70 hover:opacity-100 transition"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex gap-6 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-teal-300 rounded-full"></div>
          <span className="text-gray-600">Liberty Sources: $13,491-574,291</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
          <span className="text-gray-600">Overtruth Sources: $13,491-574,291</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
          <span className="text-gray-600">Conservative Sources: $13,491-574,291</span>
        </div>
      </div>

      {/* Alert Box */}
      <div className="mt-4 bg-teal-100 border border-teal-300 rounded p-3 flex gap-3">
        <div className="text-teal-600 font-bold">🎯</div>
        <p className="text-xs text-teal-800">
          In 20 years, at current rate, portfolio will be worth around $76,294
        </p>
      </div>
    </div>
  );
}
