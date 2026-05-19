'use client'

function getGaClientId(): string {
  if (typeof document === 'undefined') return ''
  const match = document.cookie.match(/_ga=([^;]+)/)
  if (!match) return ''
  const parts = match[1].split('.')
  return parts.length >= 4 ? `GA1.1.${parts.slice(2).join('.')}` : match[1]
}

function getOrCreateSessionToken(): string {
  if (typeof sessionStorage === 'undefined') return ''
  let token = sessionStorage.getItem('session_token')
  if (!token) {
    token = 'sess_' + Math.random().toString(36).slice(2, 11) + Date.now().toString(36)
    sessionStorage.setItem('session_token', token)
  }
  return token
}

export function initFirstTouchTracking(): void {
  if (typeof window === 'undefined') return
  if (sessionStorage.getItem('_ft_set')) return

  const p = new URLSearchParams(window.location.search)
  sessionStorage.setItem('_ft_src', p.get('utm_source') || '')
  sessionStorage.setItem('_ft_med', p.get('utm_medium') || '')
  sessionStorage.setItem('_ft_cmp', p.get('utm_campaign') || '')
  sessionStorage.setItem('_ft_trm', p.get('utm_term') || '')
  sessionStorage.setItem('_ft_cnt', p.get('utm_content') || '')
  sessionStorage.setItem('_ft_lp', window.location.href)
  sessionStorage.setItem('_ft_ref', document.referrer || '')
  sessionStorage.setItem('_ft_set', '1')
}

export function getTrackingData(): Record<string, string> {
  if (typeof window === 'undefined') return {}

  const p = new URLSearchParams(window.location.search)

  return {
    session_token: getOrCreateSessionToken(),
    ga_client_id: getGaClientId(),
    utm_source: p.get('utm_source') || '',
    utm_medium: p.get('utm_medium') || '',
    utm_campaign: p.get('utm_campaign') || '',
    utm_term: p.get('utm_term') || '',
    utm_content: p.get('utm_content') || '',
    first_utm_source: sessionStorage.getItem('_ft_src') || '',
    first_utm_medium: sessionStorage.getItem('_ft_med') || '',
    first_utm_campaign: sessionStorage.getItem('_ft_cmp') || '',
    first_utm_term: sessionStorage.getItem('_ft_trm') || '',
    first_utm_content: sessionStorage.getItem('_ft_cnt') || '',
    landing_page: sessionStorage.getItem('_ft_lp') || window.location.href,
    original_referrer: sessionStorage.getItem('_ft_ref') || document.referrer || '',
    referrer: document.referrer || '',
    page_url: window.location.href,
  }
}
