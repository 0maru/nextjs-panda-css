import { Meta, StoryObj } from '@storybook/react'
import Button from './Button'

type T = Button
type Story = StoryObj<T>;

export default {
  component: Button,
  args: {
    label: '送信'
  }
} as Meta<T>

export const Default : Story = {}
