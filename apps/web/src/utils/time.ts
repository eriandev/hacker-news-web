import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

import type { GetRelativeTimeFromNow } from 'types/web/utils'

TimeAgo.addDefaultLocale(en)

export const getRelativeTimeFromNow: GetRelativeTimeFromNow = (timestamp) => {
  const timeAgo = new TimeAgo('en-US')
  return timeAgo.format(Date.now() - timestamp)
}
