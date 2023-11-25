'use client'
import { useState } from 'react'

import { clsx } from '../../utils'
import { AtText } from '../../atoms'
import { ChevronIcon, LogoSvelteIcon, LogoAngularIcon, LogoReactIcon, LogoVueIcon } from '../../atoms/icons'
import type { MlSelectType } from 'types/atomic/molecules'

export const MlSelect: MlSelectType = ({ optionSelected = null, className = '', onSelect = () => {} }) => {
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
    <div className={clsx(['relative w-60 text-black', className])}>
      <header
        className="grid cursor-pointer select-none grid-cols-auto-max items-center gap-2 rounded border border-gray-800 bg-white px-3 py-1.5"
        onClick={() => {
          setIsActive((prev) => !prev)
        }}
      >
        <AtText medium tag="span" className={clsx(['w-max', typeof optionSelected === 'string' ? 'capitalize' : ''])}>
          {optionSelected ?? 'Select your news'}
        </AtText>
        <ChevronIcon rotate={isActive ? '180deg' : '0deg'} />
      </header>
      {isActive
        ? (
        <ul className="absolute z-10 grid w-full grid-flow-row auto-rows-min bg-white shadow-sm">
          {options.map(({ Icon, value }) => (
            <li
              key={value}
              className="grid cursor-pointer grid-cols-[1.5rem_auto] items-center gap-3 px-2.5 py-4 capitalize hover:bg-gray-100"
              onClick={() => {
                selectOption(value)
              }}
            >
              <Icon width={24} height={24} />
              <AtText medium tag="span">
                {value}
              </AtText>
            </li>
          ))}
        </ul>
          )
        : null}
    </div>
  )
}
