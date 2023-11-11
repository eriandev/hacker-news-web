import { useState } from 'react'

import { AtText } from '../../atoms'

export type MlSegmentProps = {
  options: Array<{ text: string, value: string }>
  onSelect: (optionValue: string) => void
}

export function MlSegment ({ options, onSelect }: MlSegmentProps): React.JSX.Element {
  const [selected, setSelected] = useState<string | null>(null)

  const activeClass = 'border-y-blue text-blue first:border-l-blue last:border-r-blue'
  const inactiveClass = 'border-y-[#d6d6d6] text-[#606060] first:border-l-[#d6d6d6] last:border-r-[#d6d6d6]'
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
            className={`${baseClass} ${selected === value ? activeClass : inactiveClass}`}
            onClick={() => { selectSegment(value) }}
          >
            <AtText medium tag='span' size='lg'>{text}</AtText>
          </li>
        ))
      }
    </ul>
  )
}
