'use client'
import { TmMainLayout } from 'atomic/templates'

import { useFaves, useNews } from '@/hooks'

export default function Page (): React.JSX.Element {
  const { cards, isLoading, selectedCategory, getMoreNews } = useNews()
  const { addsNewsToFave, removesNewsFaveById } = useFaves({ needLoadFaves: false })

  return <TmMainLayout
    cards={cards}
    isLoadingCards={isLoading}
    optionSelected={selectedCategory}
    headerImgSrc='/images/hacker-news.png'
    onAddFaveCard={addsNewsToFave}
    onChangeCategory={getMoreNews}
    onDeleteFaveCard={removesNewsFaveById}
  />
}
