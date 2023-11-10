import type { Meta, StoryObj } from '@storybook/react'

import { AtText } from 'atomic/atoms'

const meta = {
  title: 'atoms/AtText',
  component: AtText,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    children: {
      control: 'text'
    },
    size: {
      control: 'select',
      defaultValue: 'base',
      options: ['sm', 'base', 'lg']
    },
    medium: {
      control: 'boolean',
      defaultValue: false
    },
    className: {
      control: 'text',
      defaultValue: ''
    }
  }
} satisfies Meta<typeof AtText>

export default meta
type Story = StoryObj<typeof meta>

export const SmallNormalText: Story = {
  args: {
    children: 'SmallNormalText',
    size: 'sm',
    medium: false
  }
}

export const SmallMediumText: Story = {
  args: {
    children: 'SmallMediumText',
    size: 'sm',
    medium: true
  }
}

export const BaseNormalText: Story = {
  args: {
    children: 'BaseNormalText',
    size: 'base',
    medium: false
  }
}

export const BaseMediumText: Story = {
  args: {
    children: 'BaseMediumText',
    size: 'base',
    medium: true
  }
}

export const LargeNormalText: Story = {
  args: {
    children: 'LargeNormalText',
    size: 'lg',
    medium: false
  }
}

export const LargeMediumText: Story = {
  args: {
    children: 'LargeMediumText',
    size: 'lg',
    medium: true
  }
}
