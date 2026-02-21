import React from 'react';
import { Home, TrendingUp, BarChart3, Zap, DollarSign, Lock, Settings, LogOut } from 'lucide-react';

interface SidebarProps {
  open: boolean;
}

export default function Sidebar({ open }: SidebarProps) {
  const menuItems = [
    { icon: Home, label: 'Overview', active: true },
    { icon: TrendingUp, label: 'Forecast' },
    { icon: BarChart3, label: 'Analytics' },
    { icon: Zap, label: 'Backlog' },
    { icon: DollarSign, label: 'Sinks' },
    { icon: Lock, label: 'Bank Fund' },
    { icon: Settings, label: 'Crypto' },
    { icon: LogOut, label: 'Managers' },
    { icon: Settings, label: 'Reports' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <div className={`${open ? 'w-64' : 'w-20'} bg-amber-50 border-r border-amber-200 transition-all duration-300 flex flex-col`}>
      {/* Logo */}
      <div className="p-4 border-b border-amber-200">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded flex items-center justify-center text-white font-bold text-sm">
            R
          </div>
          {open && <span className="font-bold text-amber-900">REDPOINT</span>}
        </div>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item, idx) => (
          <div
            key={idx}
            className={`flex items-center gap-3 px-3 py-2 rounded cursor-pointer transition ${
              item.active
                ? 'bg-amber-200 text-amber-900'
                : 'text-amber-700 hover:bg-amber-100'
            }`}
          >
            <item.icon size={20} />
            {open && <span className="text-sm font-medium">{item.label}</span>}
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-amber-200">
        {open && (
          <button className="w-full bg-amber-200 text-amber-900 py-2 rounded font-semibold text-sm hover:bg-amber-300 transition">
            Sign out
          </button>
        )}
      </div>
    </div>
  );
}
