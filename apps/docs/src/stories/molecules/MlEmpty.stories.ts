import type { Meta, StoryObj } from '@storybook/react'

import { MlEmpty } from 'atomic/molecules'

const meta = {
  title: 'molecules/MlEmpty',
  component: MlEmpty,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    title: {
      control: 'text'
    },
    subtitle: {
      control: 'text'
    }
  }
} satisfies Meta<typeof MlEmpty>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    title: 'No Favourites',
    subtitle: 'You haven’t liked any items yet.'
  }
}
