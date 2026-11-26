'use client'

import { useEffect } from 'react'

type Gtag = (command: 'event', name: string, params: Record<string, string>) => void

function nearestSection(el: Element): string {
  if (el.closest('header')) return 'header'
  if (el.closest('footer')) return 'footer'
  if (el.closest('form')) return 'form'
  return 'body'
}

/**
 * Sends a Google Analytics event whenever a visitor taps a phone number
 * (`tel:` link) or an email address (`mailto:` link) anywhere on the site.
 * One listener on the document covers every page, so new phone links are
 * tracked without extra code.
 *
 * Event names match We Buy Any Vegas House (`phone_clicked`) so reports
 * read the same on both sites.
 */
export function ClickTracking() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target
      if (!(target instanceof Element)) return
      const link = target.closest('a[href^="tel:"], a[href^="mailto:"]')
      if (!link) return

      const gtag = (window as unknown as { gtag?: Gtag }).gtag
      if (typeof gtag !== 'function') return

      const href = link.getAttribute('href') || ''
      const isPhone = href.startsWith('tel:')
      gtag('event', isPhone ? 'phone_clicked' : 'email_clicked', {
        link_url: href,
        click_location: nearestSection(link),
        page_path: window.location.pathname,
      })
    }

    document.addEventListener('click', onClick, { capture: true })
    return () => document.removeEventListener('click', onClick, { capture: true })
  }, [])

  return null
}
