import type { Meta, StoryObj } from '@storybook/react'

import { ChevronIcon } from 'atomic/atoms/icons'

const meta = {
  title: 'atoms/icons/ChevronIcon',
  component: ChevronIcon,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    width: {
      control: 'number',
      defaultValue: 24
    },
    height: {
      control: 'number',
      defaultValue: 24
    },
    rotate: {
      control: 'radio',
      defaultValue: '0deg',
      options: ['0deg', '90deg', '180deg', '270deg']
    }
  }
} satisfies Meta<typeof ChevronIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Up: Story = {
  args: {
    width: 64,
    height: 64,
    rotate: '0deg'
  }
}

export const Right: Story = {
  args: {
    width: 64,
    height: 64,
    rotate: '90deg'
  }
}

export const Down: Story = {
  args: {
    width: 64,
    height: 64,
    rotate: '180deg'
  }
}

export const Left: Story = {
  args: {
    width: 64,
    height: 64,
    rotate: '270deg'
  }
}
