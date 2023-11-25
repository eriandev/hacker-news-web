import type { SVGProps } from 'react'
import type { Component } from '../global'

export type AtTextType = (props: AtTextProps) => Component
export type AtTextProps = {
  medium?: boolean
  className?: string
  children: React.ReactNode
  size?: 'sm' | 'base' | 'lg' | 'xl'
  tag?: keyof React.JSX.IntrinsicElements
}

export type IconProps = SVGProps<'svg'>
