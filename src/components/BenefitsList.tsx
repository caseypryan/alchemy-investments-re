/**
 * Benefits list component
 */

import { BenefitItem } from '@/types/content'
import {
  Clock,
  Home,
  DollarSign,
  Calendar,
  ShieldCheck,
  Users,
  FileCheck,
  CheckCircle
} from 'lucide-react'

interface BenefitsListProps {
  items: BenefitItem[]
}

const iconMap: { [key: string]: any } = {
  Clock,
  Home,
  DollarSign,
  Calendar,
  ShieldCheck,
  Users,
  FileCheck,
  CheckCircle,
}

export default function BenefitsList({ items }: BenefitsListProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item, idx) => {
        const IconComponent = item.icon ? iconMap[item.icon] : CheckCircle

        return (
          <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              {IconComponent && <IconComponent className="w-6 h-6 text-blue-600" />}
            </div>
            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        )
      })}
    </div>
  )
}
