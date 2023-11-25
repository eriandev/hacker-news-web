'use client'
import { TmFavesLayout } from 'atomic/templates'

import { useFaves } from '@/hooks'

export default function Page (): React.JSX.Element {
  const { cards, isLoading, isEmpty, addsNewsToFave, removesNewsFaveById } = useFaves({ needLoadFaves: true })

  return <TmFavesLayout
    cards={cards}
    isEmptyCardList={isEmpty}
    isLoadingCards={isLoading}
    headerImgSrc='/images/hacker-news.png'
    onAddFaveCard={addsNewsToFave}
    onDeleteFaveCard={removesNewsFaveById}
  />
}
