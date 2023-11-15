import { useState } from 'react'

import { AtText } from '../../atoms'
import { ClockIcon, HeartIcon } from '../../atoms/icons'

export type MlCardProps = {
  id: string
  link?: string
  author: string
  isFave: boolean
  createdAt: string
  storyTitle: string
  onFave?: (data: MlCardProps) => void
}

export function MlCard ({ id, author, createdAt, link, storyTitle, isFave, onFave }: MlCardProps): React.JSX.Element {
  const [currentFave, setCurrentFave] = useState<boolean>(isFave)
  const InnerTag = typeof link === 'string' ? 'a' : 'div'

  const handlerClick = (): void => {
    setCurrentFave(prev => {
      if (typeof onFave !== 'undefined') onFave({ id, author, createdAt, link, storyTitle, isFave: !prev })
      return !prev
    })
  }

  return (
    <article
      className='grid w-full max-w-card cursor-pointer grid-cols-[auto_max-content] items-center rounded-md border border-gray-500 bg-white transition-transform duration-100 ease-in-out hover:scale-[1.025]'
    >
      <InnerTag rel='noopener noreferrer' target='_blank' href={link} className='grid gap-[6px] pl-[26px] pr-4 h-[90px] grid-rows-[repeat(2,max-content)] content-center'>
        <header className='flex items-center gap-2'>
          <ClockIcon width={16} height={16} />
          <AtText tag='span' size='sm' className='text-gray-600'>
            {createdAt} by {author}
          </AtText>
        </header>
        <AtText medium tag='h3' className='line-clamp-2 text-gray-700'>
          {storyTitle}
        </AtText>
      </InnerTag>
      <aside
        className="grid h-full w-full place-items-center rounded-br-md rounded-tr-md bg-gray-200 px-[22px]"
        onClick={handlerClick}
      >
        <HeartIcon fill={currentFave} />
      </aside>
    </article>
  )
}
