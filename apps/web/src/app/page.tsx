'use client'
import { TmMainLayout } from 'atomic/templates'

import { useFavesLogic, useNewsLogic } from '@/logic'

export default function Page (): React.JSX.Element {
  const { cards, isLoading, selectedCategory, getMoreNews } = useNewsLogic()
  const { addsNewsToFave, removesNewsFaveById } = useFavesLogic({ loadFaves: false })

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
