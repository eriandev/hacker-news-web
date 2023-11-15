'use client'
import { useState } from 'react'

import { clsx } from '../../utils'
import { AtText } from '../../atoms'
import { ChevronIcon, LogoSvelteIcon, LogoAngularIcon, LogoReactIcon, LogoVueIcon } from '../../atoms/icons'

export type MlSelectProps = {
  className?: string
  optionSelected?: string | null
  onSelect?: (option: string) => void
}

export function MlSelect ({ optionSelected = null, className = '', onSelect = () => {} }: MlSelectProps): React.JSX.Element {
  const [isActive, setIsActive] = useState<boolean>(false)

  const options = [
    { value: 'svelte', Icon: LogoSvelteIcon },
    { value: 'angular', Icon: LogoAngularIcon },
    { value: 'react', Icon: LogoReactIcon },
    { value: 'vue', Icon: LogoVueIcon }
  ]

  const selectOption = (option: string): void => {
    setIsActive(false)
    onSelect(option)
  }

  return (
    <div className={clsx(['relative w-[240px] text-black', className])}>
      <header
        className='grid cursor-pointer select-none grid-cols-[auto_max-content] items-center gap-2 rounded-[4px] border border-gray-800 bg-white px-3 py-[6px]'
        onClick={() => { setIsActive(prev => !prev) }}
      >
        <AtText
          medium
          tag='span'
          className={clsx(['w-max', typeof optionSelected === 'string' ? 'capitalize' : ''])}
        >
          { optionSelected ?? 'Select your news' }
        </AtText>
        <ChevronIcon rotate={ isActive ? '180deg' : '0deg'} />
      </header>
      {
        isActive
          ? <ul className='absolute z-10 grid w-full grid-flow-row auto-rows-min bg-white shadow-sm'>
              {
                options.map(({ Icon, value }) => (
                  <li
                    key={value}
                    className='grid cursor-pointer grid-cols-[1.5rem_auto] items-center gap-3 px-[10px] py-4 capitalize hover:bg-gray-100'
                    onClick={() => { selectOption(value) }}
                  >
                    <Icon width={24} height={24} />
                    <AtText medium tag='span'>{value}</AtText>
                  </li>
                ))
              }
            </ul>
          : null
      }
    </div>
  )
}
