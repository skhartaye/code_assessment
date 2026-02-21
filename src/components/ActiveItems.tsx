'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface ActiveItem {
  id: number;
  title: string;
  address: string;
  status: string;
  date: string;
}

export default function ActiveItems() {
  const [items] = useState<ActiveItem[]>([
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

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-gray-800">Active Items</h3>
        <div className="flex gap-2">
          <button className="p-1 hover:bg-gray-100 rounded">
            <ChevronLeft size={18} />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-4 border-b border-gray-200">
        <button className="pb-2 text-sm font-semibold text-gray-900 border-b-2 border-blue-500">
          Active
        </button>
        <button className="pb-2 text-sm text-gray-500 hover:text-gray-700">
          Past
        </button>
        <button className="pb-2 text-sm text-gray-500 hover:text-gray-700">
          Snoozed
        </button>
      </div>

      {/* Items List */}
      <div className="space-y-3 max-h-96 overflow-y-auto">
        {items.map((item) => (
          <div key={item.id} className="flex gap-3 p-3 hover:bg-gray-50 rounded border border-gray-100">
            <input type="checkbox" className="mt-1" />
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">{item.title}</p>
              <p className="text-xs text-gray-500">{item.address}</p>
              <div className="flex gap-2 mt-2">
                <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">
                  {item.status}
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-1">{item.date}</p>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <X size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
