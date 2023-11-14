import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

TimeAgo.addDefaultLocale(en)

export function getRelativeTimeFromNow (timestamp: number): string {
  const timeAgo = new TimeAgo('en-US')
  return timeAgo.format(Date.now() - timestamp)
}
