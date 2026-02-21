'use client';

import React from 'react';
import { TrendingUp } from 'lucide-react';

export default function TotalInvestment() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <div className="flex items-center gap-2 mb-6">
        <TrendingUp size={20} className="text-purple-500" />
        <h3 className="font-semibold text-gray-800">Total Investment & return</h3>
      </div>

      {/* Main Card */}
      <div className="bg-gradient-to-br from-purple-200 to-purple-100 rounded-lg p-6 mb-6">
        <p className="text-sm text-purple-700 mb-2">Return on Investment</p>
        <div className="text-4xl font-bold text-purple-900 mb-2">+120.5%</div>
        <p className="text-xs text-purple-600">( +$8 - 10000-17894 )</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <p className="text-xs text-gray-500 mb-1">Total Invested</p>
          <p className="text-lg font-bold text-gray-900">$1,383,019</p>
          <p className="text-xs text-gray-400">$1,383,019</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-1">IRRR</p>
          <p className="text-lg font-bold text-gray-900">$5,678,500</p>
          <p className="text-xs text-gray-400">$5,678,500</p>
        </div>
      </div>

      {/* Additional Info */}
      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">Current Return:</span>
          <span className="text-gray-900 font-medium">$1,383,019</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Total Invested:</span>
          <span className="text-blue-600 font-medium cursor-pointer hover:underline">$5,844,636</span>
        </div>
      </div>
    </div>
  );
}
