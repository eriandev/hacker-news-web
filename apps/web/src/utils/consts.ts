export const API_URL = process.env.NEXT_PUBLIC_API_URL

export const DATE_UNITS = {
  day: 86400,
  hour: 3600,
  minute: 60,
  second: 1
} as const

export const SEGMENT_OPTIONS = [
  { text: 'All', value: 'all' },
  { text: 'My faves', value: 'faves' }
]
