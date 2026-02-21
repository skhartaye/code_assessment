import { Home, TrendingUp, BarChart3, Zap, DollarSign, Lock, Settings, LogOut } from 'lucide-react';
import { useDashboard } from '@/context/DashboardContext';

interface SidebarProps {
  open: boolean;
}

export default function Sidebar({ open }: SidebarProps) {
  const { currentPage, setCurrentPage, darkMode } = useDashboard();

  const menuItems = [
    { id: 'overview', icon: Home, label: 'Overview' },
    { id: 'forecast', icon: TrendingUp, label: 'Forecast' },
    { id: 'analytics', icon: BarChart3, label: 'Analytics' },
    { id: 'backlog', icon: Zap, label: 'Backlog' },
    { id: 'sinks', icon: DollarSign, label: 'Sinks' },
    { id: 'bank', icon: Lock, label: 'Bank Fund' },
    { id: 'crypto', icon: Settings, label: 'Crypto' },
    { id: 'managers', icon: LogOut, label: 'Managers' },
    { id: 'reports', icon: BarChart3, label: 'Reports' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className={`${open ? 'w-64' : 'w-20'} ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-amber-50 border-amber-200'} border-r transition-all duration-300 flex flex-col`}>
      {/* Logo */}
      <div className={`p-4 border-b ${darkMode ? 'border-gray-700' : 'border-amber-200'}`}>
        <div className="flex items-center gap-2">
          <svg width="32" height="32" viewBox="0 0 32 32" className="flex-shrink-0">
            <rect x="2" y="8" width="8" height="12" fill="#FFD700" stroke="#333" strokeWidth="1"/>
            <rect x="12" y="4" width="8" height="16" fill="#FF6B35" stroke="#333" strokeWidth="1"/>
            <rect x="22" y="6" width="8" height="14" fill="#6B5B95" stroke="#333" strokeWidth="1"/>
            <rect x="6" y="20" width="8" height="8" fill="#88C9F0" stroke="#333" strokeWidth="1"/>
            <rect x="16" y="22" width="8" height="6" fill="#F4A460" stroke="#333" strokeWidth="1"/>
          </svg>
          {open && <span className={`font-bold ${darkMode ? 'text-gray-100' : 'text-amber-900'}`}>REDPOINT</span>}
        </div>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentPage(item.id)}
            className={`w-full flex items-center gap-3 px-3 py-2 transition ${
              currentPage === item.id
                ? darkMode 
                  ? 'bg-gray-700 text-white' 
                  : 'bg-amber-200 text-amber-900'
                : darkMode
                ? 'text-gray-400 hover:bg-gray-800 hover:text-gray-200'
                : 'text-amber-700 hover:bg-amber-100'
            }`}
          >
            <item.icon size={20} />
            {open && <span className="text-sm font-medium">{item.label}</span>}
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className={`p-4 border-t ${darkMode ? 'border-gray-700' : 'border-amber-200'}`}>
        {open && (
          <button className={`w-full py-2 rounded font-semibold text-sm transition ${
            darkMode
              ? 'bg-gray-700 text-gray-100 hover:bg-gray-600'
              : 'bg-amber-200 text-amber-900 hover:bg-amber-300'
          }`}>
            Sign out
          </button>
        )}
      </div>
    </div>
  );
}
