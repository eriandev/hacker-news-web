import type { Meta, StoryObj } from '@storybook/react'

import { MlSegment } from 'atomic/molecules'

const meta = {
  title: 'molecules/MlSegment',
  component: MlSegment,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    active: {
      control: 'select',
      options: ['all', 'faves']
    }
  }
} satisfies Meta<typeof MlSegment>

export default meta
type Story = StoryObj<typeof meta>

export const AllSelected: Story = {
  args: {
    active: 'all'
  }
}

export const FavesSelected: Story = {
  args: {
    active: 'faves'
  }
}
