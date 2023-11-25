import { clsx } from '../../utils'
import type { AtTextType } from 'types/atomic/atoms'

export const AtText: AtTextType = ({ children, className = '', medium = false, tag = 'p', size = 'base' }) => {
  const CustomTag = tag
  const weightClass = medium ? 'font-medium' : 'font-normal'

  return <CustomTag className={clsx(['font-roboto', `text-${size}`, weightClass, className])}>{children}</CustomTag>
}
