
// src/components/layout/Header.tsx
import { Bell, Settings, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6">
      <h1 className="text-xl font-semibold">Service Provider Admin</h1>
      <div className="flex items-center gap-4">
        <Bell className="w-5 h-5 cursor-pointer" />
        <Settings className="w-5 h-5 cursor-pointer" />
        <User className="w-5 h-5 cursor-pointer" />
      </div>
    </header>
  );
}
