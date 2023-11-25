'use client'
import { useFaves } from '@/hooks'
import { TmFavesLayout } from 'atomic/templates'
import type { Component } from 'types/global'

export default function Page (): Component {
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
