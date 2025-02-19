import { getWorkers } from '@/app/lib/data'

export default async function WorkersTable() {
  const workers = await getWorkers()

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="min-w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Services</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jobs</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {workers.map(worker => (
            <tr key={worker.id}>
              <td className="px-6 py-4 whitespace-nowrap">{worker.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{worker.services.join(', ')}</td>
              <td className="px-6 py-4 whitespace-nowrap">⭐ {worker.rating}</td>
              <td className="px-6 py-4 whitespace-nowrap">{worker.jobs}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 py-1 rounded-full text-sm ${
                  worker.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {worker.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className="text-blue-500 hover:underline mr-2">View</button>
                <button className="text-blue-500 hover:underline">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}