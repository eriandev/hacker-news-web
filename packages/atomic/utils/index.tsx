import type { Clsx } from 'types/atomic/utils'

export const clsx: Clsx = (classList) => classList.join(' ').trimEnd()
