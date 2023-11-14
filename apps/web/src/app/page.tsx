'use client'
import { TmMainLayout } from 'atomic/templates'

import { useNewsService } from '@/hooks'
import { SEGMENT_OPTIONS } from '@/utils/consts'

export default function Page (): React.JSX.Element {
  const { cards, loading } = useNewsService()

  return <TmMainLayout
    cards={cards}
    loadingCards={loading}
    segmentOptions={SEGMENT_OPTIONS}
    headerImgSrc='/images/hacker-news.png'
  />
}
