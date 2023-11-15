'use client'
import { TmFavesLayout } from 'atomic/templates'

import { useFavesLogic } from '@/logic'
import { SEGMENT_OPTIONS } from '@/utils/consts'

export default function Page (): React.JSX.Element {
  const { cards, loading, isEmpty, addsNewsToFave, removesNewsFaveById } = useFavesLogic({ loadFaves: true })

  return <TmFavesLayout
    cards={cards}
    loadingCards={loading}
    emptyCardList={isEmpty}
    segmentOptions={SEGMENT_OPTIONS}
    headerImgSrc='/images/hacker-news.png'
    onAddFaveCard={addsNewsToFave}
    onDeleteFaveCard={removesNewsFaveById}
  />
}
