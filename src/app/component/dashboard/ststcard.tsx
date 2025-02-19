// src/components/dashboard/StatsCards.tsx
'use client';
import { useState, useEffect } from 'react';
import { Users, DollarSign, Package, TrendingUp } from 'lucide-react';

export default function StatsCards() {
  const [animated, setAnimated] = useState(false);
  const stats = [
    { 
      icon: Users,
      label: 'Total Users',
      value: '2,543',
      change: '+12.5%',
      color: 'bg-blue-500'
    },
    {
      icon: DollarSign,
      label: 'Revenue',
      value: '$45,234',
      change: '+8.2%',
      color: 'bg-green-500'
    },
    {
      icon: Package,
      label: 'Active Services',
      value: '182',
      change: '+5.1%',
      color: 'bg-purple-500'
    },
    {
      icon: TrendingUp,
      label: 'Growth',
      value: '23.5%',
      change: '+2.3%',
      color: 'bg-orange-500'
    }
  ];

  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className={`p-6 rounded-lg bg-white shadow-sm transform transition-all duration-500 ${
            animated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">{stat.label}</p>
              <p className="text-2xl font-semibold mt-1">{stat.value}</p>
            </div>
            <div className={`p-3 rounded-full ${stat.color}`}>
              <stat.icon className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-green-500 text-sm">{stat.change}</span>
            <span className="text-gray-600 text-sm ml-2">vs last month</span>
          </div>
        </div>
      ))}
    </div>
  );
}