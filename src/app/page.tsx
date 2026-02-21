'use client';

import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import WealthProjection from '@/components/WealthProjection';
import TotalInvestment from '@/components/TotalInvestment';
import PortfolioOverview from '@/components/PortfolioOverview';
import SpendingAnalytics from '@/components/SpendingAnalytics';
import PropertyUnits from '@/components/PropertyUnits';
import ActiveItems from '@/components/ActiveItems';
import PortfolioAlert from '@/components/PortfolioAlert';

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar open={sidebarOpen} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Greeting Section */}
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold text-amber-700">Good Morning, Michael</h1>
              <button className="bg-amber-100 text-amber-700 px-4 py-2 rounded font-semibold hover:bg-amber-200 transition">
                + ADD NEW
              </button>
            </div>

            {/* Portfolio Summary Card */}
            <PortfolioAlert />

            {/* Main Grid */}
            <div className="grid grid-cols-3 gap-6">
              {/* Left Column */}
              <div className="col-span-2 space-y-6">
                <WealthProjection />
                <SpendingAnalytics />
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <ActiveItems />
                <PropertyUnits />
              </div>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-2 gap-6">
              <TotalInvestment />
              <PortfolioOverview />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
