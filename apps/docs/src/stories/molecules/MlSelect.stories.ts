import type { Meta, StoryObj } from '@storybook/react'

import { MlSelect } from 'atomic/molecules'

const meta = {
  title: 'molecules/MlSelect',
  component: MlSelect,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    className: {
      control: 'text',
      defaultValue: ''
    }
  }
} satisfies Meta<typeof MlSelect>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    className: 'mb-32',
    onSelect: (option) => { console.log(option) }
  }
}
