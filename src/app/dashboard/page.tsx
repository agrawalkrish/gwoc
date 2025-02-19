// src/app/dashboard/page.tsx
import { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import StatsCards from '@/components/dashboard/StatsCards';
import RecentActivity from '@/components/dashboard/RecentActivity';
import TrafficAnalysis from '@/components/dashboard/TrafficAnalysis';
import RecentOrders from '@/components/dashboard/RecentOrders';

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <StatsCards />
        <div className="grid grid-cols-2 gap-6">
          <RecentActivity />
          <TrafficAnalysis />
        </div>
        <RecentOrders />
      </div>
    </DashboardLayout>
  );
}
