const STORAGE_KEY = 'delo:russian-visitor'

function cacheResult(value) {
  if (typeof window === 'undefined') return

  try {
    window.sessionStorage?.setItem(STORAGE_KEY, value ? 'true' : 'false')
  } catch {
    // ignore storage failures
  }
}

function getCachedResult() {
  if (typeof window === 'undefined') return null

  try {
    const cached = window.sessionStorage?.getItem(STORAGE_KEY)
    if (cached === 'true') return true
    if (cached === 'false') return false
  } catch {
    // ignore storage failures
  }

  return null
}

export async function detectRussianVisitor({ signal } = {}) {
  const cached = getCachedResult()
  if (cached !== null) {
    return cached
  }

  if (typeof window === 'undefined' || typeof fetch !== 'function') {
    cacheResult(false)
    return false
  }

  try {
    const response = await fetch('https://ipapi.co/json/', {
      cache: 'no-store',
      signal,
    })

    if (!response.ok) {
      cacheResult(false)
      return false
    }

    const data = await response.json()
    const isRussian = data?.country_code === 'RU'
    cacheResult(isRussian)
    return isRussian
  } catch (error) {
    if (error?.name === 'AbortError') {
      return false
    }
    cacheResult(false)
    return false
  }
}

export const RUSSIAN_VISITOR_STORAGE_KEY = STORAGE_KEY
