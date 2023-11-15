'use client'
import { TmMainLayout } from 'atomic/templates'

import { useFavesLogic, useNewsLogic } from '@/logic'

export default function Page (): React.JSX.Element {
  const { cards, loading, isEmpty } = useNewsLogic()
  const { addsNewsToFave, removesNewsFaveById } = useFavesLogic({ loadFaves: false })

  return <TmMainLayout
    cards={cards}
    loadingCards={loading}
    emptyCardList={isEmpty}
    headerImgSrc='/images/hacker-news.png'
    onAddFaveCard={addsNewsToFave}
    onDeleteFaveCard={removesNewsFaveById}
  />
}
