// src/components/layout/Sidebar.tsx
import { Home, Package, Users, FileText, Handshake } from 'lucide-react';
import Link from 'next/link';

export default function Sidebar() {
  const menuItems = [
    { icon: Home, label: 'Dashboard', href: '/dashboard' },
    { icon: Package, label: 'Services', href: '/dashboard/services' },
    { icon: Users, label: 'Workers', href: '/dashboard/workers' },
    { icon: FileText, label: 'Orders', href: '/dashboard/orders' },
    { icon: Handshake, label: 'Partnerships', href: '/dashboard/partnerships' },
  ];

  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-4">
      <div className="text-xl font-bold mb-8">Admin Dashboard</div>
      <nav>
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 p-3 rounded hover:bg-gray-800"
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
