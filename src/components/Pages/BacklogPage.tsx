'use client';

import { CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { useDashboard } from '@/context/DashboardContext';

export default function BacklogPage() {
  const { darkMode } = useDashboard();

  const backlogItems = [
    { id: 1, title: 'HVAC System Replacement', property: 'Carol House', priority: 'High', status: 'Pending', dueDate: '2025-03-15' },
    { id: 2, title: 'Roof Inspection', property: 'Downtown Plaza', priority: 'Medium', status: 'In Progress', dueDate: '2025-02-28' },
    { id: 3, title: 'Parking Lot Resurfacing', property: 'Riverside Apartments', priority: 'High', status: 'Pending', dueDate: '2025-04-01' },
    { id: 4, title: 'Plumbing Upgrades', property: 'Sunset Towers', priority: 'Low', status: 'Pending', dueDate: '2025-05-10' },
    { id: 5, title: 'Electrical Panel Update', property: 'Midtown Complex', priority: 'High', status: 'Pending', dueDate: '2025-03-20' },
    { id: 6, title: 'Landscaping Maintenance', property: 'Carol House', priority: 'Low', status: 'Completed', dueDate: '2025-02-15' },
  ];

  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case 'High': return darkMode ? 'bg-red-900 text-red-200' : 'bg-red-100 text-red-800';
      case 'Medium': return darkMode ? 'bg-yellow-900 text-yellow-200' : 'bg-yellow-100 text-yellow-800';
      case 'Low': return darkMode ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800';
      default: return darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'Completed': return <CheckCircle size={16} className="text-green-600" />;
      case 'In Progress': return <Clock size={16} className="text-blue-600" />;
      case 'Pending': return <AlertCircle size={16} className="text-orange-600" />;
      default: return null;
    }
  };

  return (
    <div className="space-y-6">
      <h1 className={`text-3xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Backlog</h1>
      
      {/* Status Summary */}
      <div className="grid grid-cols-3 gap-6">
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-orange-50 border-orange-300'} border p-4`}>
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle size={20} className={darkMode ? 'text-orange-400' : 'text-orange-600'} />
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Pending</p>
          </div>
          <p className={`text-2xl font-bold ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}>8</p>
        </div>
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-blue-50 border-blue-300'} border p-4`}>
          <div className="flex items-center gap-2 mb-2">
            <Clock size={20} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>In Progress</p>
          </div>
          <p className={`text-2xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>3</p>
        </div>
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-green-50 border-green-300'} border p-4`}>
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle size={20} className={darkMode ? 'text-green-400' : 'text-green-600'} />
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Completed</p>
          </div>
          <p className={`text-2xl font-bold ${darkMode ? 'text-green-400' : 'text-green-600'}`}>12</p>
        </div>
      </div>

      {/* Backlog Items */}
      <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'} border`}>
        <div className={`p-4 border-b ${darkMode ? 'border-gray-700 bg-gray-700' : 'border-gray-300 bg-gray-50'}`}>
          <h3 className={`font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Maintenance Tasks</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
                <th className={`text-left py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Task</th>
                <th className={`text-left py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Property</th>
                <th className={`text-left py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Priority</th>
                <th className={`text-left py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Status</th>
                <th className={`text-left py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Due Date</th>
              </tr>
            </thead>
            <tbody>
              {backlogItems.map((item) => (
                <tr key={item.id} className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
                  <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>{item.title}</td>
                  <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>{item.property}</td>
                  <td className={`py-3 px-4`}>
                    <span className={`px-2 py-1 text-xs font-semibold ${getPriorityColor(item.priority)}`}>
                      {item.priority}
                    </span>
                  </td>
                  <td className={`py-3 px-4`}>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(item.status)}
                      <span className={darkMode ? 'text-gray-300' : 'text-gray-900'}>{item.status}</span>
                    </div>
                  </td>
                  <td className={`py-3 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>{item.dueDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
