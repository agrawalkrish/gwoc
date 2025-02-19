// src/app/dashboard/orders/page.tsx
import DashboardLayout from '@/components/layout/DashboardLayout';
import OrderList from '@/components/orders/OrderList';
import OrderAnalytics from '@/components/orders/OrderAnalytics';

export default function OrdersPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Orders Management</h2>
        </div>
        <OrderAnalytics />
        <OrderList />
      </div>
    </DashboardLayout>
  );
}
