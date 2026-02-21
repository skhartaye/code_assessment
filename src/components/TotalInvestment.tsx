'use client';

import { TrendingUp } from 'lucide-react';
import { useDashboard } from '@/context/DashboardContext';

export default function TotalInvestment() {
  const { portfolioData } = useDashboard();

  const totalReturn = (portfolioData.totalInvested * portfolioData.returnOnInvestment) / 100;
  const irrr = portfolioData.totalWealth - portfolioData.totalInvested;

  return (
    <div className="bg-white border border-gray-300 shadow-sm">
      <div className="flex items-center gap-2 p-4 border-b border-gray-300" style={{ backgroundColor: '#D8BFD8' }}>
        <TrendingUp size={20} className="text-purple-900" />
        <h3 className="font-semibold text-purple-900">Total Investment & return</h3>
      </div>

      <div className="p-6">
        {/* Main Card */}
        <div className="bg-purple-200 border border-purple-400 p-6 mb-6">
          <p className="text-sm text-purple-700 mb-2">Return on Investment</p>
          <div className="text-4xl font-bold text-purple-900 mb-2">+{portfolioData.returnOnInvestment.toFixed(1)}%</div>
          <p className="text-xs text-purple-600">( +${totalReturn.toLocaleString('en-US', { maximumFractionDigits: 0 })} )</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-xs text-gray-500 mb-1">Total Invested</p>
            <p className="text-lg font-bold text-gray-900">${portfolioData.totalInvested.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
            <p className="text-xs text-gray-400">${portfolioData.totalInvested.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">IRRR</p>
            <p className="text-lg font-bold text-gray-900">${irrr.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
            <p className="text-xs text-gray-400">${irrr.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Current Return:</span>
            <span className="text-gray-900 font-medium">${totalReturn.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Total Invested:</span>
            <span className="text-blue-600 font-medium cursor-pointer hover:underline">${portfolioData.totalWealth.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
