'use client'

import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    google: any
  }
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
  const inputRef = useRef<HTMLInputElement>(null)
  const autocompleteRef = useRef<any>(null)

  // Sync external value changes to the DOM (e.g. form reset)
  useEffect(() => {
    if (inputRef.current && inputRef.current.value !== value) {
      inputRef.current.value = value
    }
  }, [value])

  useEffect(() => {
    const initAutocomplete = () => {
      if (!inputRef.current || autocompleteRef.current) return
      if (!window.google?.maps?.places) return

      autocompleteRef.current = new window.google.maps.places.Autocomplete(inputRef.current, {
        types: ['address'],
        componentRestrictions: { country: 'us' },
        fields: ['formatted_address'],
      })

      autocompleteRef.current.addListener('place_changed', () => {
        const place = autocompleteRef.current.getPlace()
        if (place?.formatted_address) {
          onChange(place.formatted_address)
          if (inputRef.current) inputRef.current.value = place.formatted_address
        }
      })
    }

    // Try immediately in case script is already loaded
    if (window.google?.maps?.places) {
      initAutocomplete()
      return
    }

    // Poll until the Google Maps script finishes loading
    const interval = setInterval(() => {
      if (window.google?.maps?.places) {
        initAutocomplete()
        clearInterval(interval)
      }
    }, 150)

    return () => {
      clearInterval(interval)
      if (autocompleteRef.current && window.google?.maps?.event) {
        window.google.maps.event.clearInstanceListeners(autocompleteRef.current)
      }
    }
  }, [onChange])

  return (
    <input
      ref={inputRef}
      type="text"
      id={id}
      defaultValue={value}
      onChange={(e) => onChange(e.target.value)}
      className={className}
      placeholder={placeholder}
      autoComplete="off"
    />
  )
}
