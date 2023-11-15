'use client'
import { TmMainLayout } from 'atomic/templates'

import { useNewsLogic } from '@/logic'
import { SEGMENT_OPTIONS } from '@/utils/consts'

export default function Page (): React.JSX.Element {
  const { cards, loading, addsNewsToFave, changeSegmentValue, removesNewsFaveById } = useNewsLogic()

  return <TmMainLayout
    cards={cards}
    loadingCards={loading}
    segmentOptions={SEGMENT_OPTIONS}
    headerImgSrc='/images/hacker-news.png'
    onAddFaveCard={addsNewsToFave}
    onChangeSegment={changeSegmentValue}
    onDeleteFaveCard={removesNewsFaveById}
  />
}
