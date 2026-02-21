'use client';

import { useState } from 'react';
import { Building2 } from 'lucide-react';
import { useDashboard } from '@/context/DashboardContext';

export default function PropertyUnits() {
  const { portfolioData } = useDashboard();
  const [activeTab, setActiveTab] = useState('occupied');

  const stats = {
    occupied: 7,
    renovation: 5,
    vacant: 3,
  };

  return (
    <div className="bg-blue-100 border border-blue-400 shadow-sm">
      <div className="p-4 border-b border-blue-400 bg-blue-200 flex items-center gap-2">
        <Building2 size={20} className="text-blue-900" />
        <h3 className="font-semibold text-blue-900">Property Units</h3>
      </div>

      <div className="p-6 bg-white">
        <h2 className="text-4xl font-bold text-blue-900 mb-8">{portfolioData.buildings} Buildings</h2>

        {/* Bar Chart */}
        <div className="flex items-end justify-between gap-1 h-40 mb-8 px-2">
          {Array(15)
            .fill(0)
            .map((_, i) => {
              let color = 'bg-blue-500';
              if (i >= 7 && i < 12) color = 'bg-blue-300';
              if (i >= 12) color = 'bg-gray-400';
              
              return (
                <div
                  key={i}
                  className={`flex-1 transition cursor-pointer border border-blue-900 ${color}`}
                  style={{ height: `${60 + Math.random() * 40}%` }}
                />
              );
            })}
        </div>

        {/* Stats */}
        <div className="flex justify-between items-end mb-6">
          <div>
            <div className="text-3xl font-bold text-blue-900">{stats.occupied}</div>
            <div className="text-sm text-gray-700">Occupied</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-900">{stats.renovation}</div>
            <div className="text-sm text-gray-700">Renovation</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-700">{stats.vacant}</div>
            <div className="text-sm text-gray-700">Vacant</div>
          </div>
        </div>

        {/* Color bars */}
        <div className="flex gap-2">
          <div className="flex-1 h-2 bg-blue-500"></div>
          <div className="flex-1 h-2 bg-blue-300"></div>
          <div className="flex-1 h-2 bg-gray-400"></div>
        </div>
      </div>
    </div>
  );
}
