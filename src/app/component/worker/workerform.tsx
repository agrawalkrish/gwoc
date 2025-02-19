
// src/components/workers/WorkerForm.tsx
'use client';
import { useState } from 'react';

export default function WorkerForm({ onSubmit, initialData = null }) {
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    email: initialData?.email || '',
    phone: initialData?.phone || '',
    address: initialData?.address || '',
    salary: initialData?.salary || '',
    joiningDate: initialData?.joiningDate || '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Phone</label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Address</label>
        <textarea
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          rows={3}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Salary</label>
        <input
          type="number"
          value={formData.salary}
          onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Joining Date</label>
        <input
          type="date"
          value={formData.joiningDate}
          onChange={(e) => setFormData({ ...formData, joiningDate: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        {initialData ? 'Update Worker' : 'Add Worker'}
      </button>
    </form>
  );
}
