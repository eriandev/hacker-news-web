import type { Meta, StoryObj } from '@storybook/react'

import { OrCardList } from 'atomic/organisms'
import type { MlCardProps } from 'atomic/molecules/ml-card'

const meta = {
  title: 'organisms/OrCardList',
  component: OrCardList,
  tags: ['autodocs'],
  argTypes: {
    cards: { control: 'object' },
    isLoading: {
      control: 'boolean',
      defaultValue: true
    },
    isEmpty: {
      control: 'boolean',
      defaultValue: false
    }
  }
} satisfies Meta<typeof OrCardList>

export default meta
type Story = StoryObj<typeof meta>

const cards: MlCardProps[] = [
  {
    id: '1',
    link: '#',
    isFave: false,
    author: 'author',
    createdAt: '2 hours ago',
    storyTitle: 'From chaos to free will'
  },
  {
    id: '2',
    link: '#',
    isFave: true,
    author: 'author',
    createdAt: '3 hours ago',
    storyTitle: 'Yes, React is taking over front-end development. The question is why.'
  },
  {
    id: '3',
    link: '#',
    isFave: false,
    author: 'author',
    createdAt: '4 hours ago',
    storyTitle: 'All the fundamental React.js concepts, jammed into the single Medium article (updated August 2019)'
  },
  {
    id: '4',
    link: '#',
    isFave: true,
    author: 'author',
    createdAt: '6 hours ago',
    storyTitle: 'Progressive Web Apps with React.js: Part I - Introduction'
  }
]

export const Empty: Story = {
  args: {
    cards,
    isEmpty: true,
    isLoading: false,
    onFaveCard: (data) => { console.log(data) }
  }
}

export const Loading: Story = {
  args: {
    cards: [],
    isLoading: true,
    onFaveCard: (data) => { console.log(data) }
  }
}

export const Loaded: Story = {
  args: {
    cards,
    isLoading: false,
    onFaveCard: (data) => { console.log(data) }
  }
}
