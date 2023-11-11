import { useState } from 'react'

import { AtText } from '../../atoms'
import { ChevronIcon, LogoAngularIcon, LogoReactIcon, LogoVueIcon } from '../../atoms/icons'

export type MlSelectProps = {
  className?: string
  onSelect: (option: string) => void
}

export function MlSelect ({ onSelect, className = '' }: MlSelectProps): React.JSX.Element {
  const [isActive, setIsActive] = useState<boolean>(false)
  const [optionSelected, setOptionSelected] = useState<string | null>(null)

  const options = [
    { text: 'Angular', Icon: LogoAngularIcon },
    { text: 'React', Icon: LogoReactIcon },
    { text: 'Vue', Icon: LogoVueIcon }
  ]

  const selectOption = (option: string): void => {
    setOptionSelected(option)
    setIsActive(false)
    onSelect(option)
  }

  return (
    <div className={`relative w-[240px] text-black ${className}`}>
      <header
        className='grid cursor-pointer select-none grid-cols-[auto_max-content] items-center gap-2 rounded-sm border border-gray-700 bg-white px-3 py-[6px]'
        onClick={() => { setIsActive(prev => !prev) }}
      >
        <AtText medium tag='span' className='w-max'>
          { optionSelected ?? 'Select your news' }
        </AtText>
        <ChevronIcon rotate={ isActive ? '180deg' : '0deg'} />
      </header>
      {
        isActive
          ? <ul className='absolute z-10 grid w-full grid-flow-row auto-rows-min bg-white shadow-sm'>
              {
                options.map(({ Icon, text }) => (
                  <li
                    key={text}
                    className='grid cursor-pointer grid-cols-[1.5rem_auto] items-center gap-3 px-2 py-3 capitalize hover:bg-gray-100'
                    onClick={() => { selectOption(text) }}
                  >
                    <Icon width={24} height={24} />
                    <AtText medium tag='span'>{text}</AtText>
                  </li>
                ))
              }
            </ul>
          : null
      }
    </div>
  )
}
