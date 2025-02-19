export async function getWorkers() {
    // In a real app, this would be an API call
    return [
      { id: '1', name: 'David Wilson', services: ['Cleaning', 'Gardening'], rating: 4.8, jobs: 156, status: 'Active' },
      { id: '2', name: 'Sarah Brown', services: ['Plumbing'], rating: 4.9, jobs: 98, status: 'Active' },
      { id: '3', name: 'James Miller', services: ['Electrical'], rating: 4.7, jobs: 124, status: 'On Leave' },
    ]
  }
  
  export async function getTrafficData() {
    return [
      { month: 'Jan', visits: 4000, uniqueUsers: 2400 },
      { month: 'Feb', visits: 3000, uniqueUsers: 1398 },
      { month: 'Mar', visits: 2000, uniqueUsers: 9800 },
      { month: 'Apr', visits: 2780, uniqueUsers: 3908 },
      { month: 'May', visits: 1890, uniqueUsers: 4800 },
      { month: 'Jun', visits: 2390, uniqueUsers: 3800 },
    ]
  }
  
  export async function getRecentOrders() {
    return [
      { id: '1', service: 'House Cleaning', customer: 'John Doe', date: '2025-02-08', status: 'Completed', amount: '$120' },
      { id: '2', service: 'Plumbing', customer: 'Jane Smith', date: '2025-02-07', status: 'In Progress', amount: '$85' },
      { id: '3', service: 'Gardening', customer: 'Mike Johnson', date: '2025-02-06', status: 'Pending', amount: '$200' },
    ]
  }