Workers Management Page

// src/app/dashboard/workers/page.tsx
import DashboardLayout from '@/components/layout/DashboardLayout';
import WorkerList from '@/components/workers/WorkerList';
import WorkerForm from '@/components/workers/WorkerForm';

export default function WorkersPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Workers Management</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Add New Worker
          </button>
        </div>
        <WorkerList />
      </div>
    </DashboardLayout>
  );
}
