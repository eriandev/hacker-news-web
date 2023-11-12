export type AtTextProps = {
  medium?: boolean
  className?: string
  children: React.ReactNode
  size?: 'sm' | 'base' | 'lg'
  tag?: keyof React.JSX.IntrinsicElements
}

export function AtText ({ children, className = '', medium = false, tag = 'p', size = 'base' }: AtTextProps): React.JSX.Element {
  const CustomTag = tag
  const weightClass = medium ? 'font-medium' : 'font-normal'

  return (
    <CustomTag className={['font-roboto', `text-${size}`, weightClass, className].join(' ').trimEnd()}>
      {children}
    </CustomTag>
  )
}
