import type { Meta, StoryObj } from '@storybook/react'

import { OrCardList } from 'atomic/organisms'
import type { MlCardProps } from 'atomic/molecules/ml-card'

const meta = {
  title: 'organisms/OrCardList',
  component: OrCardList,
  tags: ['autodocs'],
  argTypes: {
    cards: { control: 'object' },
    loading: { control: 'boolean' }
  }
} satisfies Meta<typeof OrCardList>

export default meta
type Story = StoryObj<typeof meta>

const cards: MlCardProps[] = [
  {
    link: '#',
    author: 'author',
    createdAt: '2 hours ago',
    storyTitle: 'From chaos to free will'
  },
  {
    link: '#',
    author: 'author',
    createdAt: '3 hours ago',
    storyTitle: 'Yes, React is taking over front-end development. The question is why.'
  },
  {
    link: '#',
    author: 'author',
    createdAt: '4 hours ago',
    storyTitle: 'All the fundamental React.js concepts, jammed into the single Medium article (updated August 2019)'
  },
  {
    link: 'sdsadasda',
    author: 'author',
    createdAt: '6 hours ago',
    storyTitle: 'Progressive Web Apps with React.js: Part I - Introduction'
  }
]

export const Loaded: Story = {
  args: {
    cards,
    loading: false,
    onFavCard: ({ isFav, info }) => { console.log({ isFav, info }) }
  }
}

export const Loading: Story = {
  args: {
    cards,
    loading: true,
    onFavCard: ({ isFav, info }) => { console.log({ isFav, info }) }
  }
}
