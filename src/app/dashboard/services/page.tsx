// src/app/dashboard/services/page.tsx
import DashboardLayout from '@/components/layout/DashboardLayout';
import ServiceList from '@/components/services/ServiceList';

export default function ServicesPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Services Management</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Add New Service
          </button>
        </div>
        <ServiceList />
      </div>
    </DashboardLayout>
  );
}