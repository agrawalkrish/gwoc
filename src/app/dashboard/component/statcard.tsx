import { LucideIcon } from 'lucide-react'

interface StatCardProps {
  title: string
  value: string
  description: string
  icon: LucideIcon
}

export default function StatCard({ title, value, description, icon: Icon }: StatCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 flex flex-col items-center shadow-sm">
      <div className="flex flex-col items-center w-full">
        <Icon className="h-6 w-6 text-gray-500 mb-4" />
        <h3 className="text-sm text-gray-500 font-normal mb-2">{title}</h3>
        <p className="text-4xl font-bold text-gray-900 mb-2">{value}</p>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  )
}