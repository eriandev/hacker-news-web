import type { Component } from '../global'
import type { MlCardProps } from './molecules'

export type OrCardListType = (props: OrCardListProps) => Component
export type OrCardListProps = {
  isEmpty?: boolean
  isLoading?: boolean
  cards: MlCardProps[]
  onFaveCard: (data: MlCardProps) => void
}
