import type { Meta, StoryObj } from '@storybook/react'

import { ClockIcon } from 'atomic/atoms/icons'

const meta = {
  title: 'atoms/icons/ClockIcon',
  component: ClockIcon,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    width: {
      control: 'number',
      defaultValue: 16
    },
    height: {
      control: 'number',
      defaultValue: 16
    }
  }
} satisfies Meta<typeof ClockIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Icon: Story = {
  args: {
    width: 64,
    height: 64
  }
}
