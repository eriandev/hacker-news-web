import type { Meta, StoryObj } from '@storybook/react'

import { MlLoading } from 'atomic/molecules'

const meta = {
  title: 'molecules/MlLoading',
  component: MlLoading,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    text: {
      control: 'text'
    }
  }
} satisfies Meta<typeof MlLoading>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    text: 'Loading...'
  }
}
