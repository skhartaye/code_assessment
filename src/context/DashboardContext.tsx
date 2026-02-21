'use client';

import React, { createContext, useContext, useState } from 'react';

interface DashboardContextType {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
  portfolioData: {
    totalWealth: number;
    totalInvested: number;
    returnOnInvestment: number;
    buildings: number;
    units: number;
    annualRevenue: number;
    netCashflow: number;
    dscr: number;
    nsi: number;
  };
  updatePortfolioData: (data: Partial<DashboardContextType['portfolioData']>) => void;
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [currentPage, setCurrentPage] = useState('overview');
  const [darkMode, setDarkMode] = useState(false);
  const [portfolioData, setPortfolioData] = useState({
    totalWealth: 13107926.29,
    totalInvested: 1383019,
    returnOnInvestment: 120.5,
    buildings: 5,
    units: 106,
    annualRevenue: 3078000,
    netCashflow: 275929,
    dscr: 1.25,
    nsi: 1383019,
  });

  const updatePortfolioData = (data: Partial<typeof portfolioData>) => {
    setPortfolioData(prev => ({ ...prev, ...data }));
  };

  return (
    <DashboardContext.Provider value={{ currentPage, setCurrentPage, darkMode, setDarkMode, portfolioData, updatePortfolioData }}>
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within DashboardProvider');
  }
  return context;
}
