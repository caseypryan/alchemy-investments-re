/**
 * Location information component
 */

import { LocationData } from '@/types/content'
import { MapPin, Users, DollarSign } from 'lucide-react'

interface LocationInfoProps {
  location: LocationData
}

export default function LocationInfo({ location }: LocationInfoProps) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
      <h3 className="text-2xl font-semibold mb-6">About {location.city}</h3>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <MapPin className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="font-semibold">Location</p>
            <p className="text-gray-700">{location.city}, {location.stateAbbr}</p>
          </div>
        </div>

        {location.population && (
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-semibold">Population</p>
              <p className="text-gray-700">{location.population.toLocaleString()}</p>
            </div>
          </div>
        )}

        {location.medianHomePrice && (
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <DollarSign className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-semibold">Median Home Price</p>
              <p className="text-gray-700">{location.medianHomePrice}</p>
            </div>
          </div>
        )}
      </div>

      {location.zipCodes && location.zipCodes.length > 0 && (
        <div className="mt-6 pt-6 border-t border-blue-200">
          <p className="font-semibold mb-2">Zip Codes We Serve:</p>
          <p className="text-gray-700">{location.zipCodes.join(', ')}</p>
        </div>
      )}
    </div>
  )
}
