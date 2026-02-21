import React from 'react';
import { Menu, Search, Bell, Settings, User } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button onClick={onMenuClick} className="p-2 hover:bg-gray-100 rounded">
          <Menu size={20} />
        </button>
        <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Find anything..."
            className="bg-transparent outline-none text-sm w-48"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-gray-100 rounded">
          <Bell size={20} />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded">
          <Settings size={20} />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded">
          <User size={20} />
        </button>
      </div>
    </div>
  );
}
