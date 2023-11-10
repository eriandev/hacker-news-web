import type { Meta, StoryObj } from '@storybook/react'

import { PackmanIcon } from 'atomic/atoms/icons'

const meta = {
  title: 'atoms/icons/PackmanIcon',
  component: PackmanIcon,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    width: {
      control: 'number',
      defaultValue: 32
    },
    height: {
      control: 'number',
      defaultValue: 32
    }
  }
} satisfies Meta<typeof PackmanIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Icon: Story = {
  args: {
    width: 128,
    height: 128
  }
}
