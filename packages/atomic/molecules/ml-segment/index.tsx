import { useState } from 'react'

import { clsx } from '../../utils'
import { AtText } from '../../atoms'

export type MlSegmentProps = {
  options: Array<{ text: string, value: string }>
  onSelect: (optionValue: string) => void
}

export function MlSegment ({ options, onSelect }: MlSegmentProps): React.JSX.Element {
  const [selected, setSelected] = useState<string | null>(options[0].value)

  const activeClass = 'border-blue text-blue'
  const inactiveClass = 'border-y-gray-400 text-gray-800 first:border-l-gray-400 last:border-r-gray-400'
  const baseClass = 'min-w-[6rem] cursor-pointer select-none border py-0.5 first:rounded-bl first:rounded-tl last:rounded-br last:rounded-tr'

  const selectSegment = (optionValue: string): void => {
    setSelected(optionValue)
    onSelect(optionValue)
  }

  return (
    <ul className='flex text-center justify-items-center'>
      {
        options.map(({ text, value }) => (
          <li
            key={value}
            className={clsx([baseClass, selected === value ? activeClass : inactiveClass])}
            onClick={() => { selectSegment(value) }}
          >
            <AtText medium tag='span' size='lg'>
              {text}
            </AtText>
          </li>
        ))
      }
    </ul>
  )
}
