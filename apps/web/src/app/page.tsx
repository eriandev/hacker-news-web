'use client'
import { TmMainLayout } from 'atomic/templates'

import { useNewsLogic } from '@/logic'
import { SEGMENT_OPTIONS } from '@/utils/consts'

export default function Page (): React.JSX.Element {
  const {
    cards,
    loading,
    isEmpty,
    addsNewsToFave,
    changeSegmentValue,
    removesNewsFaveById
  } = useNewsLogic()

  return <TmMainLayout
    cards={cards}
    loadingCards={loading}
    emptyCardList={isEmpty}
    segmentOptions={SEGMENT_OPTIONS}
    headerImgSrc='/images/hacker-news.png'
    onAddFaveCard={addsNewsToFave}
    onChangeSegment={changeSegmentValue}
    onDeleteFaveCard={removesNewsFaveById}
  />
}
