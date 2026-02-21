'use client';

import { useDashboard } from '@/context/DashboardContext';

export default function PortfolioOverview() {
  const { portfolioData } = useDashboard();

  return (
    <div style={{ backgroundColor: '#EF7D6033' }} className="border border-gray-300 shadow-sm">
      <div style={{ backgroundColor: '#EF7D60' }} className="p-4 border-b border-gray-300 flex items-center gap-2">
        <span className="text-lg">🏠</span>
        <h3 className="font-semibold text-white">Portfolio Overview</h3>
      </div>

      <div className="p-6">
        {/* Top row - Buildings and Units */}
        <div className="flex justify-between items-center mb-6 pb-6 border-b border-gray-300">
          <div>
            <p className="text-sm text-gray-600">Buildings</p>
            <p className="text-3xl font-bold text-gray-900">{portfolioData.buildings}</p>
          </div>
          <div className="w-px h-12 bg-gray-400"></div>
          <div>
            <p className="text-sm text-gray-600">Units</p>
            <p className="text-3xl font-bold text-gray-900">{portfolioData.units}</p>
          </div>
        </div>

        {/* Grid of Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-red-50 border border-red-300 p-4">
            <p className="text-sm font-semibold text-red-700">Annual Revenue</p>
            <p className="text-lg font-bold text-red-700">${portfolioData.annualRevenue.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
            <p className="text-xs text-red-600">${(portfolioData.annualRevenue / 12).toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
          </div>
          <div className="bg-red-50 border border-red-300 p-4">
            <p className="text-sm font-semibold text-red-700">Net Cashflow</p>
            <p className="text-lg font-bold text-red-700">${portfolioData.netCashflow.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
            <p className="text-xs text-red-600">${(portfolioData.netCashflow / 12).toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
          </div>
          <div className="bg-red-50 border border-red-300 p-4">
            <p className="text-sm font-semibold text-red-700">DSCR</p>
            <p className="text-lg font-bold text-red-700">{portfolioData.dscr.toFixed(2)}x</p>
            <p className="text-xs text-red-600">COVERAGE RATIO</p>
          </div>
          <div className="bg-red-50 border border-red-300 p-4">
            <p className="text-sm font-semibold text-red-700">NOI</p>
            <p className="text-lg font-bold text-red-700">${portfolioData.nsi.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
            <p className="text-xs text-red-600">${(portfolioData.nsi / 12).toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
