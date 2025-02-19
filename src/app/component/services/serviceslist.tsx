
// src/components/services/ServiceList.tsx
'use client';
import { useState } from 'react';
import { Search } from 'lucide-react';
import ServiceCard from 'D:/SkolProject/gwoc/frontend/src/app/component/services/servicecard';

// Sample services data
const services = Array.from({ length: 30 }, (_, i) => ({
  id: `service-${i + 1}`,
  name: `Service ${i + 1}`,
  description: `Description for Service ${i + 1}`,
  image: `/api/placeholder/300/200`,
  price: Math.floor(Math.random() * 200) + 50,
  rating: (Math.random() * 5).toFixed(1),
  orders: Math.floor(Math.random() * 100),
}));

export default function ServiceList() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = services.filter(service =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search services..."
          className="w-full pl-10 pr-4 py-2 border rounded-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}

// src/components/services/ServiceCard.tsx
import Image from 'next/image';
import { Star } from 'lucide-react';

export default function ServiceCard({ service }) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="relative h-48">
        <Image
          src={service.image}
          alt={service.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{service.name}</h3>
        <p className="text-gray-600 mt-1">{service.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="ml-1">{service.rating}</span>
          </div>
          <span className="text-blue-500 font-semibold">${service.price}</span>
        </div>
        <div className="mt-2 text-sm text-gray-500">
          {service.orders} orders
        </div>
      </div>
    </div>
  );
}