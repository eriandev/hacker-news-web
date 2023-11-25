import { clsx } from '../../utils'

export type AtTextProps = {
  medium?: boolean
  className?: string
  children: React.ReactNode
  size?: 'sm' | 'base' | 'lg' | 'xl'
  tag?: keyof React.JSX.IntrinsicElements
}

export function AtText ({
  children,
  className = '',
  medium = false,
  tag = 'p',
  size = 'base'
}: AtTextProps): React.JSX.Element {
  const CustomTag = tag
  const weightClass = medium ? 'font-medium' : 'font-normal'

  return <CustomTag className={clsx(['font-roboto', `text-${size}`, weightClass, className])}>{children}</CustomTag>
}
