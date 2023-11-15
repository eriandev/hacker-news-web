import { clsx } from '../../utils'
import { AtText } from '../../atoms'

export type MlSegmentProps = {
  options: Array<{ text: string, link: string }>
}

export function MlSegment ({ options }: MlSegmentProps): React.JSX.Element {
  // const activeClass = 'border-blue text-blue'
  // const inactiveClass = 'border-y-gray-400 text-gray-800 first:border-l-gray-400 last:border-r-gray-400'
  const baseClass = 'min-w-[6rem] cursor-pointer select-none border py-0.5 first:rounded-bl first:rounded-tl last:rounded-br last:rounded-tr'

  return (
    <ul className='flex text-center justify-items-center'>
      {
        options.map(({ text, link }, index) => (
          <li
            key={index}
            className={clsx([baseClass])}
          >
            <a href={link}>
              <AtText medium tag='span' size='lg'>
                {text}
              </AtText>
            </a>
          </li>
        ))
      }
    </ul>
  )
}
