
// src/components/workers/WorkerList.tsx
'use client';
import { useState } from 'react';
import { Search, Star } from 'lucide-react';

const workers = Array.from({ length: 10 }, (_, i) => ({
  id: `worker-${i + 1}`,
  name: `Worker ${i + 1}`,
  email: `worker${i + 1}@example.com`,
  phone: `+1234567890${i}`,
  address: `Address ${i + 1}`,
  salary: 3000 + (i * 200),
  rating: (Math.random() * 5).toFixed(1),
  joiningDate: '2024-01-01',
}));

export default function WorkerList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');

  const filteredWorkers = workers
    .filter(worker =>
      worker.name.toLowerCase
Last edited 7 hours ago