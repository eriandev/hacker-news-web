import type { Meta, StoryObj } from '@storybook/react'

import { MlHeader } from 'atomic/molecules'

const meta = {
  title: 'molecules/MlHeader',
  component: MlHeader,
  tags: ['autodocs'],
  argTypes: {
    imageSrc: {
      control: 'text'
    }
  }
} satisfies Meta<typeof MlHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    imageSrc: '/images/hacker-news.png'
  }
}
