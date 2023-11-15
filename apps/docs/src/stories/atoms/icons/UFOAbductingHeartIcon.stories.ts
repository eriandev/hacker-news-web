import type { Meta, StoryObj } from '@storybook/react'

import { UFOAbductingHeartIcon } from 'atomic/atoms/icons'

const meta = {
  title: 'atoms/icons/UFOAbductingHeartIcon',
  component: UFOAbductingHeartIcon,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    width: {
      control: 'number',
      defaultValue: 256
    },
    height: {
      control: 'number',
      defaultValue: 256
    }
  }
} satisfies Meta<typeof UFOAbductingHeartIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Icon: Story = {
  args: {
    width: 256,
    height: 256
  }
}
