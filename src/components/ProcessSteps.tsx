/**
 * Process steps component
 */

interface ProcessStep {
  step: number
  title: string
  description: string
}

interface ProcessStepsProps {
  steps: ProcessStep[]
}

export default function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <div className="space-y-8">
      {steps.map((step, idx) => (
        <div key={idx} className="flex gap-6">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
              {step.step}
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
            <p className="text-gray-600 text-lg">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
