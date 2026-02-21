'use client';

import React from 'react';

export default function PortfolioOverview() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <h3 className="font-semibold text-gray-800 mb-6">Portfolio Overview</h3>

      {/* Grid of Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-2xl font-bold text-red-700">5</p>
          <p className="text-xs text-red-600">Buildings</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-2xl font-bold text-red-700">106</p>
          <p className="text-xs text-red-600">Units</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-sm font-semibold text-red-700">Annual Revenue</p>
          <p className="text-lg font-bold text-red-700">$3,078,000</p>
          <p className="text-xs text-red-600">$734, 500-00</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-sm font-semibold text-red-700">Net Cashflow</p>
          <p className="text-lg font-bold text-red-700">$275,929</p>
          <p className="text-xs text-red-600">$27, 592-00</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-sm font-semibold text-red-700">DSCR</p>
          <p className="text-lg font-bold text-red-700">1.25x</p>
          <p className="text-xs text-red-600">CURRENT RATIO</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-sm font-semibold text-red-700">NSI</p>
          <p className="text-lg font-bold text-red-700">$1,383,019</p>
          <p className="text-xs text-red-600">$1,383-00-89</p>
        </div>
      </div>
    </div>
  );
}
