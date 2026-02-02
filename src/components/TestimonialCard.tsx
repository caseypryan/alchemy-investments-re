/**
 * Testimonial card component
 */

import { Star } from 'lucide-react'

interface Testimonial {
  name: string
  location?: string
  rating: number
  text: string
  date?: string
}

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, idx) => (
          <Star
            key={idx}
            className={`w-5 h-5 ${
              idx < testimonial.rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
      <div className="border-t pt-4">
        <p className="font-semibold">{testimonial.name}</p>
        {testimonial.location && (
          <p className="text-sm text-gray-600">{testimonial.location}</p>
        )}
      </div>
    </div>
  )
}
