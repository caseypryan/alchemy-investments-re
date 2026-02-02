/**
 * Neighborhood list component
 */

interface Neighborhood {
  name: string
  description: string
}

interface NeighborhoodListProps {
  neighborhoods: Neighborhood[]
}

export default function NeighborhoodList({ neighborhoods }: NeighborhoodListProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {neighborhoods.map((neighborhood, idx) => (
        <div key={idx} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
          <h3 className="text-xl font-semibold mb-2">{neighborhood.name}</h3>
          <p className="text-gray-600">{neighborhood.description}</p>
        </div>
      ))}
    </div>
  )
}
