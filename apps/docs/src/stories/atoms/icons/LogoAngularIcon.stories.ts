import type { Meta, StoryObj } from '@storybook/react'

import { LogoAngularIcon } from 'atomic/atoms/icons'

const meta = {
  title: 'atoms/icons/LogoAngularIcon',
  component: LogoAngularIcon,
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
} satisfies Meta<typeof LogoAngularIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Icon: Story = {
  args: {
    width: 64,
    height: 64
  }
}
