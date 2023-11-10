import type { Meta, StoryObj } from '@storybook/react'

import { HeartIcon } from 'atomic/atoms/icons'

const meta = {
  title: 'atoms/icons/HeartIcon',
  component: HeartIcon,
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
      defaultValue: 22
    },
    fill: {
      control: 'boolean'
    }
  }
} satisfies Meta<typeof HeartIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Fill: Story = {
  args: {
    width: 64,
    height: 64,
    fill: true
  }
}

export const Outline: Story = {
  args: {
    width: 64,
    height: 64,
    fill: false
  }
}
