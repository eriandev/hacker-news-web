import type { Component } from '../global'

export type MlCardType = (props: MlCardProps) => Component
export type MlCardProps = {
  id: string
  link?: string
  author: string
  isFave: boolean
  createdAt: string
  storyTitle: string
  onFave?: (data: MlCardProps) => void
}

export type MlEmptyType = (props: MlEmptyProps) => Component
export type MlEmptyProps = {
  title: string
  subtitle: string
}

export type MlHeaderType = (props: MlHeaderProps) => Component
export type MlHeaderProps = {
  imageSrc: string
}

export type MlLoadingType = (props: MlLoadingProps) => Component
export type MlLoadingProps = {
  text: string
}

export type MlSegmentType = (props: MlSegmentProps) => Component
export type MlSegmentProps = {
  active: 'all' | 'faves'
}

export type MlSelectType = (props: MlSelectProps) => Component
export type MlSelectProps = {
  className?: string
  optionSelected?: string | null
  onSelect?: (option: string) => void
}
