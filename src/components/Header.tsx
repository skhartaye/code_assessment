import { Menu, Search, Bell, Settings, User, Moon, Sun } from 'lucide-react';
import { useDashboard } from '@/context/DashboardContext';

interface HeaderProps {
  onMenuClick: () => void;
  onSearchClick: () => void;
  onNotificationClick: () => void;
  onSettingsClick?: () => void;
  onAccountClick?: () => void;
}

export default function Header({ onMenuClick, onSearchClick, onNotificationClick, onSettingsClick, onAccountClick }: HeaderProps) {
  const { darkMode, setDarkMode } = useDashboard();

  return (
    <div className={`${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'} border-b px-6 py-4 flex items-center justify-between transition-colors`}>
      <div className="flex items-center gap-4">
        <button onClick={onMenuClick} className={`p-2 ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} rounded transition`}>
          <Menu size={22} className={darkMode ? 'text-gray-300' : 'text-gray-700'} />
        </button>
        <div className={`flex items-center gap-2 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} px-3 py-2 rounded cursor-pointer hover:opacity-80 transition`} onClick={onSearchClick}>
          <Search size={18} className={darkMode ? 'text-gray-500' : 'text-gray-500'} />
          <input
            type="text"
            placeholder="Find anything..."
            className={`${darkMode ? 'bg-gray-800 text-white placeholder-gray-500' : 'bg-gray-100 text-gray-900 placeholder-gray-500'} outline-none text-sm w-48 transition-colors`}
            onClick={(e) => {
              e.stopPropagation();
              onSearchClick();
            }}
            readOnly
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button onClick={onNotificationClick} className={`p-2 ${darkMode ? 'hover:bg-gray-800 text-gray-300' : 'hover:bg-gray-100 text-gray-700'} rounded transition`}>
          <Bell size={22} />
        </button>
        <button onClick={onSettingsClick} className={`p-2 ${darkMode ? 'hover:bg-gray-800 text-gray-300' : 'hover:bg-gray-100 text-gray-700'} rounded transition`}>
          <Settings size={22} />
        </button>
        <button onClick={onAccountClick} className={`p-2 ${darkMode ? 'hover:bg-gray-800 text-gray-300' : 'hover:bg-gray-100 text-gray-700'} rounded transition`}>
          <User size={22} />
        </button>
        <div className="w-px h-6 bg-gray-300"></div>
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className={`p-2 ${darkMode ? 'hover:bg-gray-800 text-yellow-400' : 'hover:bg-gray-100 text-gray-700'} rounded transition`}
        >
          {darkMode ? <Sun size={22} /> : <Moon size={22} />}
        </button>
      </div>
    </div>
  );
}
