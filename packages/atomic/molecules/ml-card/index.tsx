import Link from 'next/link'
import { useState } from 'react'

import { AtText } from '../../atoms'
import { ClockIcon, HeartIcon } from '../../atoms/icons'

export type MlCardProps = {
  link: string
  author: string
  createdAt: string
  storyTitle: string
  onFav?: (data: { isFav: boolean, info: MlCardProps }) => void
}

export function MlCard ({ author, createdAt, link, storyTitle, onFav }: MlCardProps): React.JSX.Element {
  const [isFav, setIsFav] = useState<boolean>(false)

  const handlerClick = (): void => {
    setIsFav(prev => {
      if (typeof onFav !== 'undefined') onFav({ isFav: !prev, info: { author, createdAt, link, storyTitle } })
      return !prev
    })
  }

  return (
    <article
      className='grid w-full max-w-card cursor-pointer grid-cols-[auto_max-content] items-center rounded-md border border-gray-400 bg-white hover:opacity-40'
    >
      <Link href={link} className='grid gap-[6px] py-6 pl-[26px] pr-4'>
        <header className='flex items-center gap-2'>
          <ClockIcon width={16} height={16} />
          <AtText tag='span' size='sm' className='text-gray-500'>
            {createdAt} by {author}
          </AtText>
        </header>
        <AtText medium tag='h3' className='text-gray-600'>
          {storyTitle}
        </AtText>
      </Link>
      <aside
        className="grid h-full w-full place-items-center rounded-br-md rounded-tr-md bg-gray-200 px-[22px]"
        onClick={handlerClick}
      >
        <HeartIcon fill={isFav} />
      </aside>
    </article>
  )
}
