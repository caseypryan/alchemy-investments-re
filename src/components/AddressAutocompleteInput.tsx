'use client'

import { useState, useRef, useEffect, useCallback } from 'react'

interface Suggestion {
  text: string
  placeId: string
}

interface Props {
  value: string
  onChange: (value: string) => void
  className?: string
  placeholder?: string
  id?: string
}

export default function AddressAutocompleteInput({
  value,
  onChange,
  className,
  placeholder,
  id,
}: Props) {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([])
  const [showDropdown, setShowDropdown] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const debounceRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const containerRef = useRef<HTMLDivElement>(null)

  const fetchSuggestions = useCallback(async (input: string) => {
    if (input.length < 3) {
      setSuggestions([])
      setShowDropdown(false)
      return
    }
    try {
      const res = await fetch('/api/places-autocomplete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input }),
      })
      const data = await res.json()
      const results: Suggestion[] = (data.suggestions || [])
        .map((s: any) => ({
          text: s.placePrediction?.text?.text || '',
          placeId: s.placePrediction?.placeId || '',
        }))
        .filter((s: Suggestion) => s.text)
      setSuggestions(results)
      setShowDropdown(results.length > 0)
      setActiveIndex(-1)
    } catch {
      setSuggestions([])
      setShowDropdown(false)
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
    clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => fetchSuggestions(e.target.value), 300)
  }

  const handleSelect = (suggestion: Suggestion) => {
    onChange(suggestion.text)
    setSuggestions([])
    setShowDropdown(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showDropdown) return
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex((i) => Math.min(i + 1, suggestions.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex((i) => Math.max(i - 1, -1))
    } else if (e.key === 'Enter' && activeIndex >= 0) {
      e.preventDefault()
      handleSelect(suggestions[activeIndex])
    } else if (e.key === 'Escape') {
      setShowDropdown(false)
    }
  }

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setShowDropdown(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div ref={containerRef} className="relative">
      <input
        type="text"
        id={id}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onFocus={() => suggestions.length > 0 && setShowDropdown(true)}
        className={className}
        placeholder={placeholder}
        autoComplete="off"
      />
      {showDropdown && suggestions.length > 0 && (
        <ul className="absolute z-50 w-full bg-white border border-gray-200 rounded-lg shadow-lg mt-1 max-h-64 overflow-auto">
          {suggestions.map((s, i) => (
            <li
              key={s.placeId || i}
              onMouseDown={(e) => { e.preventDefault(); handleSelect(s) }}
              className={`flex items-center gap-3 px-4 py-3 cursor-pointer text-sm text-gray-700 border-b border-gray-100 last:border-0 ${
                i === activeIndex ? 'bg-gray-100' : 'hover:bg-gray-50'
              }`}
            >
              <svg className="w-4 h-4 text-gray-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              {s.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
