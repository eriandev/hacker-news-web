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
    options: { control: 'object' }
  }
} satisfies Meta<typeof MlSegment>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    options: [
      { text: 'All', value: 'all' },
      { text: 'My faves', value: 'faves' }
    ],
    onSelect: (optionValue) => { console.log(optionValue) }
  }
}
