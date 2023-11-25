import type { Component } from '../global'
import type { MlCardProps } from './molecules'

export type TmFavesLayoutType = (props: TmFavesLayoutProps) => Component
export type TmFavesLayoutProps = {
  cards: MlCardProps[]
  headerImgSrc: string
  isLoadingCards: boolean
  isEmptyCardList: boolean
  onDeleteFaveCard: (id: string) => void
  onAddFaveCard: (fave: MlCardProps) => void
}

export type TmMainLayoutType = (props: TmMainLayoutProps) => Component
export type TmMainLayoutProps = {
  cards: MlCardProps[]
  headerImgSrc: string
  isLoadingCards: boolean
  isEmptyCardList?: boolean
  optionSelected: string | null
  onDeleteFaveCard: (id: string) => void
  onAddFaveCard: (fave: MlCardProps) => void
  onChangeCategory: (info: { category: string | null }) => void
}