const STORAGE_KEY = 'delo:russian-visitor'
const RUSSIAN_TIMEZONES = new Set([
  'Europe/Kaliningrad',
  'Europe/Moscow',
  'Europe/Samara',
  'Asia/Yekaterinburg',
  'Asia/Omsk',
  'Asia/Novosibirsk',
  'Asia/Barnaul',
  'Asia/Tomsk',
  'Asia/Krasnoyarsk',
  'Asia/Irkutsk',
  'Asia/Chita',
  'Asia/Yakutsk',
  'Asia/Khandyga',
  'Asia/Sakhalin',
  'Asia/Magadan',
  'Asia/Srednekolymsk',
  'Asia/Vladivostok',
  'Asia/Ust-Nera',
  'Asia/Kamchatka',
  'Asia/Anadyr',
])

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

function hasRussianLocale() {
  if (typeof window === 'undefined') return false

  const locales = Array.isArray(navigator.languages) && navigator.languages.length > 0 ? navigator.languages : [navigator.language]

  return locales.filter(Boolean).some((locale) => {
    const normalized = locale.toLowerCase()
    return normalized.startsWith('ru') || normalized.endsWith('-ru')
  })
}

function hasRussianTimezone() {
  if (typeof window === 'undefined') return false

  try {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    return timezone ? RUSSIAN_TIMEZONES.has(timezone) : false
  } catch {
    return false
  }
}

export async function detectRussianVisitor({ signal } = {}) {
  const cached = getCachedResult()
  if (cached !== null) {
    return cached
  }

  if (hasRussianLocale() || hasRussianTimezone()) {
    cacheResult(true)
    return true
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
