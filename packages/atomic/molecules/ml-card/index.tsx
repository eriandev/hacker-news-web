import { useState } from 'react'

import { AtText } from '../../atoms'
import { ClockIcon, HeartIcon } from '../../atoms/icons'

export type MlCardProps = {
  id: string
  link?: string
  author: string
  createdAt: string
  storyTitle: string
  onFav?: (data: { isFav: boolean, info: MlCardProps }) => void
}

export function MlCard ({ id, author, createdAt, link, storyTitle, onFav }: MlCardProps): React.JSX.Element {
  const [isFav, setIsFav] = useState<boolean>(false)
  const InnerTag = typeof link === 'string' ? 'a' : 'div'

  const handlerClick = (): void => {
    setIsFav(prev => {
      if (typeof onFav !== 'undefined') onFav({ isFav: !prev, info: { id, author, createdAt, link, storyTitle } })
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
        <HeartIcon fill={isFav} />
      </aside>
    </article>
  )
}
