import { useState } from 'react'
import { ClockIcon, HeartIcon } from '../../atoms/icons'

export type MlCardProps = {
  link: string
  author: string
  createdAt: string
  storyTitle: string
  onFav: (isFav: boolean) => void
}

export function MlCard ({ author, createdAt, link, storyTitle, onFav }: MlCardProps): React.JSX.Element {
  const [isFav, setIsFav] = useState<boolean>(false)

  const handlerClick = (): void => {
    setIsFav(prev => {
      onFav(!prev)
      return !prev
    })
  }

  return (
    <article
      className='grid w-full max-w-[550px] cursor-pointer grid-cols-[auto_max-content] items-center rounded-md border border-gray-400 bg-white hover:opacity-40'
    >
      <a href={link} className='grid gap-[6px] py-6 pl-[26px] pr-4'>
        <header className='flex items-center gap-2 text-gray-500'>
          <ClockIcon width={16} height={16} />
          <span className='text-sm'>{createdAt} by {author}</span>
        </header>
        <h3 className='font-medium text-gray-600'>
          {storyTitle}
        </h3>
      </a>
      <aside
        className="grid h-full w-full place-items-center rounded-br-md rounded-tr-md bg-gray-200 px-[22px]"
        onClick={handlerClick}
      >
        <HeartIcon fill={isFav} />
      </aside>
    </article>
  )
}
