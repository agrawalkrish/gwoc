"use client";
import React, { useState } from "react";
import Image from "next/image";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  Activity,
  Users,
  Wrench,
  Settings,
  Package,
  Home,
  LogOut,
  Edit,
  Trash,
  Plus,
  Save,
} from "lucide-react";

// Mock Data
const mockRevenueData = [
  { month: "Jan", revenue: 156000, orders: 234 },
  { month: "Feb", revenue: 178000, orders: 278 },
  { month: "Mar", revenue: 195000, orders: 312 },
  { month: "Apr", revenue: 215000, orders: 348 },
  { month: "May", revenue: 238000, orders: 389 },
  { month: "Jun", revenue: 258000, orders: 412 },
];

const initialServices = [
  { id: 1, name: "AC Repair", price: 799, workers: 45, orders: 189 },
  { id: 2, name: "Fan Installation", price: 299, workers: 32, orders: 245 },
  { id: 3, name: "Washing Machine Repair", price: 599, workers: 28, orders: 156 },
  { id: 4, name: "Plumbing Services", price: 399, workers: 52, orders: 278 },
  { id: 5, name: "Electrical Work", price: 499, workers: 38, orders: 198 },
];

const initialWorkers = [
  { id: 1, name: "Rajesh Kumar", specialty: "AC Repair", rating: 4.8, jobs: 156 },
  { id: 2, name: "Amit Sharma", specialty: "Plumbing", rating: 4.7, jobs: 189 },
  { id: 3, name: "Priya Patel", specialty: "Electrical", rating: 4.9, jobs: 145 },
  { id: 4, name: "Sandeep Singh", specialty: "Appliances", rating: 4.6, jobs: 167 },
  { id: 5, name: "Neha Verma", specialty: "Electronics", rating: 4.8, jobs: 178 },
];

const mockOrders = [
  { id: 1, customer: "Ankit Gupta", service: "AC Repair", status: "Completed", amount: 799 },
  { id: 2, customer: "Meera Shah", service: "Plumbing", status: "In Progress", amount: 399 },
  { id: 3, customer: "Ravi Desai", service: "Fan Installation", status: "Pending", amount: 299 },
  { id: 4, customer: "Sonia Singh", service: "Electrical Work", status: "Completed", amount: 499 },
  { id: 5, customer: "Vikram Mehta", service: "Washing Machine Repair", status: "In Progress", amount: 599 },
];

const servicePerformance = [
  { name: "AC Repair", revenue: 151010, growth: 25 },
  { name: "Plumbing", revenue: 125800, growth: 18 },
  { name: "Electrical", revenue: 98500, growth: 15 },
  { name: "Appliances", revenue: 85600, growth: 12 },
  { name: "Electronics", revenue: 75400, growth: 10 },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [services, setServices] = useState(initialServices);
  const [workers, setWorkers] = useState(initialWorkers);
  const [editingService, setEditingService] = useState(null);
  const [editingWorker, setEditingWorker] = useState(null);
  const [newService, setNewService] = useState({ name: "", price: "", workers: "", orders: "" });
  const [newWorker, setNewWorker] = useState({ name: "", specialty: "", rating: "", jobs: "" });

  const totalRevenue = mockRevenueData.reduce((sum, data) => sum + data.revenue, 0);
  const totalOrders = mockRevenueData.reduce((sum, data) => sum + data.orders, 0);
  const totalWorkers = workers.length;

  // CRUD Operations for Services
  const handleAddService = () => {
    const newId = services.length + 1;
    setServices([...services, { id: newId, ...newService }]);
    setNewService({ name: "", price: "", workers: "", orders: "" });
  };

  const handleEditService = (service) => {
    setEditingService(service);
  };

  const handleUpdateService = () => {
    setServices(services.map((s) => (s.id === editingService.id ? editingService : s)));
    setEditingService(null);
  };

  const handleDeleteService = (id) => {
    setServices(services.filter((s) => s.id !== id));
  };

  // CRUD Operations for Workers
  const handleAddWorker = () => {
    const newId = workers.length + 1;
    setWorkers([...workers, { id: newId, ...newWorker }]);
    setNewWorker({ name: "", specialty: "", rating: "", jobs: "" });
  };

  const handleEditWorker = (worker) => {
    setEditingWorker(worker);
  };

  const handleUpdateWorker = () => {
    setWorkers(workers.map((w) => (w.id === editingWorker.id ? editingWorker : w)));
    setEditingWorker(null);
  };

  const handleDeleteWorker = (id) => {
    setWorkers(workers.filter((w) => w.id !== id));
  };

  const renderDashboard = () => (
    <div className="p-6 space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 transition-all hover:shadow-md">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-black">Total Revenue</h3>
            <Activity className="text-blue-600" size={24} />
          </div>
          <p className="text-2xl font-bold text-black mt-2">₹{totalRevenue.toLocaleString()}</p>
          <p className="text-sm text-black mt-1">+18% from last month</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 transition-all hover:shadow-md">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-black">Total Orders</h3>
            <Package className="text-green-600" size={24} />
          </div>
          <p className="text-2xl font-bold text-black mt-2">{totalOrders}</p>
          <p className="text-sm text-black mt-1">+12% from last month</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 transition-all hover:shadow-md">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-black">Active Workers</h3>
            <Users className="text-purple-600" size={24} />
          </div>
          <p className="text-2xl font-bold text-black mt-2">{totalWorkers}</p>
          <p className="text-sm text-black mt-1">+5 new this month</p>
        </div>
      </div>

      {/* Revenue Chart */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 transition-all hover:shadow-md">
        <h3 className="text-xl font-semibold text-black mb-4">Revenue Overview</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockRevenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#2563eb" strokeWidth={2} />
              <Line type="monotone" dataKey="orders" stroke="#16a34a" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Service Performance */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 transition-all hover:shadow-md">
        <h3 className="text-xl font-semibold text-black mb-4">Service Performance</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={servicePerformance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" fill="#2563eb" />
              <Bar dataKey="growth" fill="#16a34a" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 transition-all hover:shadow-md">
        <div className="p-6">
          <h3 className="text-xl font-semibold text-black mb-4">Recent Orders</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-black">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold">Customer</th>
                  <th className="text-left py-3 px-4 font-semibold">Service</th>
                  <th className="text-left py-3 px-4 font-semibold">Status</th>
                  <th className="text-right py-3 px-4 font-semibold">Amount</th>
                </tr>
              </thead>
              <tbody>
                {mockOrders.map((order) => (
                  <tr key={order.id} className="border-b hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-4">{order.customer}</td>
                    <td className="py-3 px-4">{order.service}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-1 rounded-full text-sm ${
                          order.status === "Completed"
                            ? "bg-green-100 text-green-800"
                            : order.status === "In Progress"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">₹{order.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  const renderServices = () => (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-black mb-6">Services Management</h2>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 transition-all hover:shadow-md">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-black mb-4">Add New Service</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Service Name"
              value={newService.name}
              onChange={(e) => setNewService({ ...newService, name: e.target.value })}
              className="px-4 py-2 rounded-lg text-black border border-gray-300 focus:outline-none focus:border-blue-500 transition-all"
            />
            <input
              type="number"
              placeholder="Price"
              value={newService.price}
              onChange={(e) => setNewService({ ...newService, price: e.target.value })}
              className="px-4 py-2 rounded-lg text-black border border-gray-300 focus:outline-none focus:border-blue-500 transition-all"
            />
            <input
              type="number"
              placeholder="Workers"
              value={newService.workers}
              onChange={(e) => setNewService({ ...newService, workers: e.target.value })}
              className="px-4 py-2 rounded-lg text-black border border-gray-300 focus:outline-none focus:border-blue-500 transition-all"
            />
            <input
              type="number"
              placeholder="Orders"
              value={newService.orders}
              onChange={(e) => setNewService({ ...newService, orders: e.target.value })}
              className="px-4 py-2 rounded-lg text-black border border-gray-300 focus:outline-none focus:border-blue-500 transition-all"
            />
            <button
              onClick={handleAddService}
              className="flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
            >
              <Plus size={16} className="mr-2" />
              Add Service
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-black">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-semibold">Service</th>
                <th className="text-left py-3 px-4 font-semibold">Price</th>
                <th className="text-left py-3 px-4 font-semibold">Workers</th>
                <th className="text-left py-3 px-4 font-semibold">Orders</th>
                <th className="text-left py-3 px-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr key={service.id} className="border-b hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4">
                    {editingService?.id === service.id ? (
                      <input
                        type="text"
                        value={editingService.name}
                        onChange={(e) =>
                          setEditingService({ ...editingService, name: e.target.value })
                        }
                        className="px-2 py-1 rounded-lg text-black border border-gray-300 focus:outline-none focus:border-blue-500 transition-all"
                      />
                    ) : (
                      service.name
                    )}
                  </td>
                  <td className="py-3 px-4">
                    {editingService?.id === service.id ? (
                      <input
                        type="number"
                        value={editingService.price}
                        onChange={(e) =>
                          setEditingService({ ...editingService, price: e.target.value })
                        }
                        className="px-2 py-1 rounded-lg text-black border border-gray-300 focus:outline-none focus:border-blue-500 transition-all"
                      />
                    ) : (
                      `₹${service.price}`
                    )}
                  </td>
                  <td className="py-3 px-4">
                    {editingService?.id === service.id ? (
                      <input
                        type="number"
                        value={editingService.workers}
                        onChange={(e) =>
                          setEditingService({ ...editingService, workers: e.target.value })
                        }
                        className="px-2 py-1 rounded-lg text-black border border-gray-300 focus:outline-none focus:border-blue-500 transition-all"
                      />
                    ) : (
                      service.workers
                    )}
                  </td>
                  <td className="py-3 px-4">
                    {editingService?.id === service.id ? (
                      <input
                        type="number"
                        value={editingService.orders}
                        onChange={(e) =>
                          setEditingService({ ...editingService, orders: e.target.value })
                        }
                        className="px-2 py-1 rounded-lg text-black border border-gray-300 focus:outline-none focus:border-blue-500 transition-all"
                      />
                    ) : (
                      service.orders
                    )}
                  </td>
                  <td className="py-3 px-4">
                    {editingService?.id === service.id ? (
                      <button
                        onClick={handleUpdateService}
                        className="flex items-center bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition-all"
                      >
                        <Save size={16} className="mr-2" />
                        Save
                      </button>
                    ) : (
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEditService(service)}
                          className="flex items-center bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition-all"
                        >
                          <Edit size={16} className="mr-2" />
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteService(service.id)}
                          className="flex items-center bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition-all"
                        >
                          <Trash size={16} className="mr-2" />
                          Delete
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderWorkers = () => (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-black mb-6">Workers Management</h2>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 transition-all hover:shadow-md">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-black mb-4">Add New Worker</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Worker Name"
              value={newWorker.name}
              onChange={(e) => setNewWorker({ ...newWorker, name: e.target.value })}
              className="px-4 py-2 rounded-lg text-black border border-gray-300 focus:outline-none focus:border-blue-500 transition-all"
            />
            <input
              type="text"
              placeholder="Specialty"
              value={newWorker.specialty}
              onChange={(e) => setNewWorker({ ...newWorker, specialty: e.target.value })}
              className="px-4 py-2 rounded-lg border text-black border-gray-300 focus:outline-none focus:border-blue-500 transition-all"
            />
            <input
              type="number"
              placeholder="Rating"
              value={newWorker.rating}
              onChange={(e) => setNewWorker({ ...newWorker, rating: e.target.value })}
              className="px-4 py-2 rounded-lg text-black border border-gray-300 focus:outline-none focus:border-blue-500 transition-all"
            />
            <input
              type="number"
              placeholder="Jobs Completed"
              value={newWorker.jobs}
              onChange={(e) => setNewWorker({ ...newWorker, jobs: e.target.value })}
              className="px-4 py-2 rounded-lg text-black border border-gray-300 focus:outline-none focus:border-blue-500 transition-all"
            />
            <button
              onClick={handleAddWorker}
              className="flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
            >
              <Plus size={16} className="mr-2" />
              Add Worker
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-black">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-semibold">Name</th>
                <th className="text-left py-3 px-4 font-semibold">Specialty</th>
                <th className="text-left py-3 px-4 font-semibold">Rating</th>
                <th className="text-left py-3 px-4 font-semibold">Jobs Completed</th>
                <th className="text-left py-3 px-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {workers.map((worker) => (
                <tr key={worker.id} className="border-b hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4">
                    {editingWorker?.id === worker.id ? (
                      <input
                        type="text"
                        value={editingWorker.name}
                        onChange={(e) =>
                          setEditingWorker({ ...editingWorker, name: e.target.value })
                        }
                        className="px-2 py-1 rounded-lg text-black border border-gray-300 focus:outline-none focus:border-blue-500 transition-all"
                      />
                    ) : (
                      worker.name
                    )}
                  </td>
                  <td className="py-3 px-4">
                    {editingWorker?.id === worker.id ? (
                      <input
                        type="text"
                        value={editingWorker.specialty}
                        onChange={(e) =>
                          setEditingWorker({ ...editingWorker, specialty: e.target.value })
                        }
                        className="px-2 py-1 rounded-lg text-black border border-gray-300 focus:outline-none focus:border-blue-500 transition-all"
                      />
                    ) : (
                      worker.specialty
                    )}
                  </td>
                  <td className="py-3 px-4">
                    {editingWorker?.id === worker.id ? (
                      <input
                        type="number"
                        value={editingWorker.rating}
                        onChange={(e) =>
                          setEditingWorker({ ...editingWorker, rating: e.target.value })
                        }
                        className="px-2 py-1 rounded-lg text-black border border-gray-300 focus:outline-none focus:border-blue-500 transition-all"
                      />
                    ) : (
                      worker.rating
                    )}
                  </td>
                  <td className="py-3 px-4">
                    {editingWorker?.id === worker.id ? (
                      <input
                        type="number"
                        value={editingWorker.jobs}
                        onChange={(e) =>
                          setEditingWorker({ ...editingWorker, jobs: e.target.value })
                        }
                        className="px-2 py-1 rounded-lg text-black border border-gray-300 focus:outline-none focus:border-blue-500 transition-all"
                      />
                    ) : (
                      worker.jobs
                    )}
                  </td>
                  <td className="py-3 px-4">
                    {editingWorker?.id === worker.id ? (
                      <button
                        onClick={handleUpdateWorker}
                        className="flex items-center bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition-all"
                      >
                        <Save size={16} className="mr-2" />
                        Save
                      </button>
                    ) : (
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEditWorker(worker)}
                          className="flex items-center bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition-all"
                        >
                          <Edit size={16} className="mr-2" />
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteWorker(worker.id)}
                          className="flex items-center bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition-all"
                        >
                          <Trash size={16} className="mr-2" />
                          Delete
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderOrders = () => (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-black mb-6">Orders Management</h2>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 transition-all hover:shadow-md">
        <div className="overflow-x-auto">
          <table className="w-full text-black">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-semibold">Customer</th>
                <th className="text-left py-3 px-4 font-semibold">Service</th>
                <th className="text-left py-3 px-4 font-semibold">Status</th>
                <th className="text-right py-3 px-4 font-semibold">Amount</th>
              </tr>
            </thead>
            <tbody>
              {mockOrders.map((order) => (
                <tr key={order.id} className="border-b hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4">{order.customer}</td>
                  <td className="py-3 px-4">{order.service}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-sm ${
                        order.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : order.status === "In Progress"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">₹{order.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-black mb-6">Settings</h2>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 transition-all hover:shadow-md">
        <div className="space-y-8">
          {/* Business Information */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">Business Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Business Name"
                className="px-4 py-2 rounded-lg text-black border border-gray-300 focus:outline-none focus:border-blue-500 transition-all"
              />
              <input
                type="text"
                placeholder="Contact Number"
                className="px-4 py-2 rounded-lg text-black border border-gray-300 focus:outline-none focus:border-blue-500 transition-all"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="px-4 py-2 rounded-lg text-black border border-gray-300 focus:outline-none focus:border-blue-500 transition-all"
              />
              <input
                type="text"
                placeholder="Business Address"
                className="px-4 py-2 rounded-lg text-black border border-gray-300 focus:outline-none focus:border-blue-500 transition-all"
              />
            </div>
          </div>
  
          {/* Worker Management */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">Worker Management</h3>
            <div className="space-y-4">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox text-blue-600" />
                <span className="text-black">Enable Worker Registration</span>
              </label>
              <div className="flex items-center space-x-4">
                <span className="text-black">Worker Commission Rate:</span>
                <input
                  type="number"
                  placeholder="Commission Rate (%)"
                  className="px-4 py-2 rounded-lg text-black border border-gray-300 focus:outline-none focus:border-blue-500 transition-all"
                />
              </div>
            </div>
          </div>
          
  
          {/* Security Settings */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">Security Settings</h3>
            <div className="space-y-4">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox text-blue-600" />
                <span className="text-black">Enable Two-Factor Authentication (2FA)</span>
              </label>
              <div className="flex items-center space-x-4">
                <span className="text-black">Change Admin Password:</span>
                <input
                  type="password"
                  placeholder="New Password"
                  className="px-4 py-2 rounded-lg text-black border border-gray-300 focus:outline-none focus:border-blue-500 transition-all"
                />
              </div>
            </div>
          </div>
  
          {/* Save Changes Button */}
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );

  const renderSidebar = () => (
    <div className="w-64 h-screen bg-gray-900 text-white fixed left-0 top-0">
      <div className="p-6">
        <h1 className="text-xl font-bold">HelperBuddy Admin</h1>
      </div>
      <nav className="mt-6">
        <div
          className={`flex items-center px-6 py-3 cursor-pointer ${
            activeTab === "dashboard" ? "bg-gray-800" : "hover:bg-gray-800"
          }`}
          onClick={() => setActiveTab("dashboard")}
        >
          <Home size={20} className="mr-3" />
          <span>Dashboard</span>
        </div>
        <div
          className={`flex items-center px-6 py-3 cursor-pointer ${
            activeTab === "services" ? "bg-gray-800" : "hover:bg-gray-800"
          }`}
          onClick={() => setActiveTab("services")}
        >
          <Wrench size={20} className="mr-3" />
          <span>Services</span>
        </div>
        <div
          className={`flex items-center px-6 py-3 cursor-pointer ${
            activeTab === "workers" ? "bg-gray-800" : "hover:bg-gray-800"
          }`}
          onClick={() => setActiveTab("workers")}
        >
          <Users size={20} className="mr-3" />
          <span>Workers</span>
        </div>
        <div
          className={`flex items-center px-6 py-3 cursor-pointer ${
            activeTab === "orders" ? "bg-gray-800" : "hover:bg-gray-800"
          }`}
          onClick={() => setActiveTab("orders")}
        >
          <Package size={20} className="mr-3" />
          <span>Orders</span>
        </div>
        <div
          className={`flex items-center px-6 py-3 cursor-pointer ${
            activeTab === "settings" ? "bg-gray-800" : "hover:bg-gray-800"
          }`}
          onClick={() => setActiveTab("settings")}
        >
          <Settings size={20} className="mr-3" />
          <span>Settings</span>
        </div>
      </nav>
      <div className="absolute bottom-0 w-full p-6">
        <div className="flex items-center cursor-pointer hover:bg-gray-800 p-3 rounded transition-all">
          <LogOut size={20} className="mr-3" />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {renderSidebar()}
      <div className="ml-64 flex-1">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-black">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h2>
            
          </div>
          {activeTab === "dashboard" && renderDashboard()}
          {activeTab === "services" && renderServices()}
          {activeTab === "workers" && renderWorkers()}
          {activeTab === "orders" && renderOrders()}
          {activeTab === "settings" && renderSettings()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;