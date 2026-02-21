'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useDashboard } from '@/context/DashboardContext';

interface ActiveItem {
  id: number;
  title: string;
  address: string;
  status: string;
  date: string;
}

export default function ActiveItems() {
  const { darkMode } = useDashboard();
  
  const [items, setItems] = useState<ActiveItem[]>([
    {
      id: 1,
      title: 'Renew Coupons Insurance for Carol House',
      address: 'CAEX • 250 Robson Street',
      status: 'New Collection',
      date: 'Due 07/12/2025',
    },
    {
      id: 2,
      title: 'Send rent reminder for Carol House until 903',
      address: 'CAEX • 250 Robson Street',
      status: 'New Collection',
      date: 'Due 07/12/2025',
    },
    {
      id: 3,
      title: 'Verify municipal tax installment before July deadline',
      address: 'CAEX • 250 Robson Street',
      status: 'New Collection',
      date: 'Due 07/12/2025',
    },
    {
      id: 4,
      title: 'Send rent reminder for Carol House until 903',
      address: 'CAEX • 250 Robson Street',
      status: 'New Collection',
      date: 'Due 07/12/2025',
    },
    {
      id: 5,
      title: 'Verify municipal tax installment before July deadline',
      address: 'CAEX • 250 Robson Street',
      status: 'New Collection',
      date: 'Due 07/12/2025',
    },
    {
      id: 6,
      title: 'Send rent reminder for Carol House until 903',
      address: 'CAEX • 250 Robson Street',
      status: 'New Collection',
      date: 'Due 07/12/2025',
    },
  ]);

  const pastItems: ActiveItem[] = [
    {
      id: 101,
      title: 'Property inspection completed',
      address: 'CAEX • 250 Robson Street',
      status: 'Completed',
      date: 'Completed 01/12/2025',
    },
    {
      id: 102,
      title: 'Annual maintenance review',
      address: 'CAEX • 250 Robson Street',
      status: 'Completed',
      date: 'Completed 12/11/2024',
    },
    {
      id: 103,
      title: 'Tenant agreement renewal',
      address: 'CAEX • 250 Robson Street',
      status: 'Completed',
      date: 'Completed 10/11/2024',
    },
  ];

  const snoozedItems: ActiveItem[] = [
    {
      id: 201,
      title: 'Schedule quarterly review meeting',
      address: 'CAEX • 250 Robson Street',
      status: 'Snoozed',
      date: 'Resume 15/03/2025',
    },
    {
      id: 202,
      title: 'Budget planning for next quarter',
      address: 'CAEX • 250 Robson Street',
      status: 'Snoozed',
      date: 'Resume 01/04/2025',
    },
    {
      id: 203,
      title: 'Update property documentation',
      address: 'CAEX • 250 Robson Street',
      status: 'Snoozed',
      date: 'Resume 20/03/2025',
    },
  ];

  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());
  const [activeTab, setActiveTab] = useState('active');

  const toggleCheck = (id: number) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(id)) {
      newChecked.delete(id);
    } else {
      newChecked.add(id);
    }
    setCheckedItems(newChecked);
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const getDisplayItems = () => {
    switch (activeTab) {
      case 'past':
        return pastItems;
      case 'snoozed':
        return snoozedItems;
      default:
        return items;
    }
  };

  const displayItems = getDisplayItems();

  return (
    <div className={`${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-blue-400'} border shadow-sm transition-colors`}>
      <div className={`flex justify-between items-center p-4 border-b ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-blue-400 bg-blue-100'}`}>
        <h3 className={`font-semibold ${darkMode ? 'text-gray-100' : 'text-blue-900'}`}>Active Items</h3>
        <div className="flex gap-2">
          <button className={`p-1 ${darkMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-200 text-gray-700'} transition`}>
            <ChevronLeft size={18} />
          </button>
          <button className={`p-1 ${darkMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-200 text-gray-700'} transition`}>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className={`flex gap-4 px-4 pt-4 border-b ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
        <button 
          onClick={() => setActiveTab('active')}
          className={`pb-2 text-sm font-semibold transition ${
            activeTab === 'active'
              ? `text-blue-500 border-b-2 border-blue-500 ${darkMode ? '' : ''}`
              : `${darkMode ? 'text-gray-500 hover:text-gray-400' : 'text-gray-500 hover:text-gray-700'}`
          }`}
        >
          Active
        </button>
        <button 
          onClick={() => setActiveTab('past')}
          className={`pb-2 text-sm transition ${
            activeTab === 'past'
              ? `text-blue-500 border-b-2 border-blue-500 ${darkMode ? '' : ''}`
              : `${darkMode ? 'text-gray-500 hover:text-gray-400' : 'text-gray-500 hover:text-gray-700'}`
          }`}
        >
          Past
        </button>
        <button 
          onClick={() => setActiveTab('snoozed')}
          className={`pb-2 text-sm transition ${
            activeTab === 'snoozed'
              ? `text-blue-500 border-b-2 border-blue-500 ${darkMode ? '' : ''}`
              : `${darkMode ? 'text-gray-500 hover:text-gray-400' : 'text-gray-500 hover:text-gray-700'}`
          }`}
        >
          Snoozed
        </button>
      </div>

      {/* Items List */}
      <div className="space-y-0 max-h-96 overflow-y-auto">
        {displayItems.map((item) => (
          <div 
            key={item.id} 
            className={`flex gap-3 p-4 ${darkMode ? 'hover:bg-gray-800 border-gray-700' : 'hover:bg-gray-50 border-gray-200'} border-b transition cursor-pointer`}
            onClick={() => activeTab === 'active' && toggleCheck(item.id)}
          >
            {activeTab === 'active' && (
              <input 
                type="checkbox" 
                className="mt-1 cursor-pointer"
                checked={checkedItems.has(item.id)}
                onChange={() => toggleCheck(item.id)}
                onClick={(e) => e.stopPropagation()}
              />
            )}
            <div className="flex-1">
              <p className={`text-sm font-medium transition ${
                activeTab === 'active' && checkedItems.has(item.id) 
                  ? `line-through ${darkMode ? 'text-gray-500' : 'text-gray-400'}` 
                  : darkMode ? 'text-gray-100' : 'text-gray-900'
              }`}>
                {item.title}
              </p>
              <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>{item.address}</p>
              <div className="flex gap-2 mt-2">
                <span className={`text-xs px-2 py-1 ${
                  activeTab === 'past' 
                    ? 'bg-green-100 text-green-700'
                    : activeTab === 'snoozed'
                    ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-red-100 text-red-700'
                }`}>
                  {item.status}
                </span>
              </div>
              <p className={`text-xs ${darkMode ? 'text-gray-600' : 'text-gray-400'} mt-1`}>{item.date}</p>
            </div>
            {activeTab === 'active' && (
              <button 
                className={`${darkMode ? 'text-gray-600 hover:text-red-500' : 'text-gray-400 hover:text-red-600'} transition`}
                onClick={(e) => {
                  e.stopPropagation();
                  removeItem(item.id);
                }}
              >
                <X size={16} />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
