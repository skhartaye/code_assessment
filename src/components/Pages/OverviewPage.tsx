'use client';

import WealthProjection from '@/components/WealthProjection';
import TotalInvestment from '@/components/TotalInvestment';
import PortfolioOverview from '@/components/PortfolioOverview';
import SpendingAnalytics from '@/components/SpendingAnalytics';
import PropertyUnits from '@/components/PropertyUnits';
import ActiveItems from '@/components/ActiveItems';
import PortfolioAlert from '@/components/PortfolioAlert';

export default function OverviewPage() {
  return (
    <div className="space-y-6">
      {/* Portfolio Summary Card */}
      <PortfolioAlert />

      {/* Row 1: Wealth Projection + Active Items */}
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <WealthProjection />
        </div>
        <div className="col-span-1">
          <ActiveItems />
        </div>
      </div>

      {/* Row 2: Total Investment + Portfolio Overview */}
      <div className="grid grid-cols-2 gap-6">
        <TotalInvestment />
        <PortfolioOverview />
      </div>

      {/* Row 3: Spending Analytics + Property Units */}
      <div className="grid grid-cols-2 gap-6">
        <SpendingAnalytics />
        <PropertyUnits />
      </div>
    </div>
  );
}
