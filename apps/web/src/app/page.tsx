'use client'
import { TmMainLayout } from 'atomic/templates'

import { useFavesLogic, useNewsLogic } from '@/logic'
import { SEGMENT_OPTIONS } from '@/utils/consts'

export default function Page (): React.JSX.Element {
  const { cards, loading, isEmpty } = useNewsLogic()
  const { addsNewsToFave, removesNewsFaveById } = useFavesLogic({ loadFaves: false })

  return <TmMainLayout
    cards={cards}
    loadingCards={loading}
    emptyCardList={isEmpty}
    segmentOptions={SEGMENT_OPTIONS}
    headerImgSrc='/images/hacker-news.png'
    onAddFaveCard={addsNewsToFave}
    onDeleteFaveCard={removesNewsFaveById}
  />
}
