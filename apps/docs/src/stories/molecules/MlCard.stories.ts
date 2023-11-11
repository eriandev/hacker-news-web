import type { Meta, StoryObj } from '@storybook/react'

import { MlCard } from 'atomic/molecules'

const meta = {
  title: 'molecules/MlCard',
  component: MlCard,
  tags: ['autodocs'],
  argTypes: {
    link: { control: 'text' },
    author: { control: 'text' },
    createdAt: { control: 'text' },
    storyTitle: { control: 'text' }
  }
} satisfies Meta<typeof MlCard>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    link: '#',
    author: 'author',
    createdAt: '3 hours ago',
    storyTitle: 'All the fundamental React.js concepts, jammed into the single Medium article (updated August 2019)',
    onFav: () => {}
  }
}
