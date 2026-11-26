'use client'

import { useEffect } from 'react'

const TRIGGER_EVENTS = ['scroll', 'pointerdown', 'keydown', 'touchstart'] as const

/** Load anyway after this long, so visitors who only read are still counted. */
const FALLBACK_MS = 12_000

function addScript(src: string) {
  const script = document.createElement('script')
  script.async = true
  script.src = src
  document.head.appendChild(script)
}

declare global {
  interface Window {
    dataLayer?: unknown[]
    __entryUrl?: string
  }
}

interface DeferredTrackingProps {
  gaMeasurementId?: string
  gtmId?: string
}

/**
 * Downloads Google Analytics and Google Tag Manager only after the visitor's
 * first scroll, tap, click or key press (or after 12 seconds), so they do not
 * compete with the page itself while it first loads.
 *
 * Nothing is lost for visitors who interact: the layout sets up the `gtag`
 * queue straight away (see TrackingQueue below), so the page view and any
 * early phone tap or form event wait in the queue and are sent as soon as
 * the scripts arrive. Visitors who leave within 12 seconds without touching
 * the page are not counted.
 */
export function DeferredTracking({ gaMeasurementId, gtmId }: DeferredTrackingProps) {
  useEffect(() => {
    if (!gaMeasurementId && !gtmId) return

    let loaded = false
    let fallbackTimer: ReturnType<typeof setTimeout> | undefined

    function removeTriggers() {
      for (const name of TRIGGER_EVENTS) window.removeEventListener(name, load)
      if (fallbackTimer !== undefined) clearTimeout(fallbackTimer)
    }

    function load() {
      if (loaded) return
      loaded = true
      removeTriggers()

      if (gtmId) {
        window.dataLayer = window.dataLayer ?? []
        window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' })
        addScript(`https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(gtmId)}`)
      }
      if (gaMeasurementId) {
        // If the visitor's first tap already moved them to another page, the
        // queued page view is for the page they arrived on. Add one for the
        // page they are on now, so neither visit is lost.
        const entryUrl = window.__entryUrl
        if (entryUrl && entryUrl !== window.location.href) {
          window.gtag?.('event', 'page_view', {
            page_location: window.location.href,
            page_referrer: entryUrl,
          })
        }
        addScript(
          `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaMeasurementId)}`
        )
      }
    }

    for (const name of TRIGGER_EVENTS) {
      window.addEventListener(name, load, { passive: true, once: true })
    }
    fallbackTimer = setTimeout(load, FALLBACK_MS)

    return removeTriggers
  }, [gaMeasurementId, gtmId])

  return null
}

/**
 * Tiny inline script that creates the Google Analytics queue immediately.
 * It downloads nothing; it only lets the rest of the site call `gtag(...)`
 * before the real script has loaded.
 *
 * The first page view is queued here with the address and referrer the
 * visitor arrived with, so the entry page and any ad-campaign details in its
 * address are recorded correctly even if the scripts load a page later.
 */
export function TrackingQueue({ gaMeasurementId }: { gaMeasurementId?: string }) {
  if (!gaMeasurementId) return null
  // Escape "<" so the id can never close the script tag early.
  const id = JSON.stringify(gaMeasurementId).replace(/</g, '\\u003c')
  return (
    <script
      dangerouslySetInnerHTML={{
        __html:
          `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}` +
          `window.__entryUrl=location.href;gtag('js',new Date());` +
          `gtag('config',${id},{send_page_view:false});` +
          `gtag('event','page_view',{page_location:location.href,page_referrer:document.referrer});`,
      }}
    />
  )
}
