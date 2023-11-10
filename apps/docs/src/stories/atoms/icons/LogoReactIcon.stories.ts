import type { Meta, StoryObj } from '@storybook/react'

import { LogoReactIcon } from 'atomic/atoms/icons'

const meta = {
  title: 'atoms/icons/LogoReactIcon',
  component: LogoReactIcon,
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
} satisfies Meta<typeof LogoReactIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Icon: Story = {
  args: {
    width: 64,
    height: 64
  }
}
