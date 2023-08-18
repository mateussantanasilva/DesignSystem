import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

// base component
export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    // content
    children:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis hic, ad dicta suscipit totam minus illum sit ipsa sint magnam repellat magni, nemo placeat itaque error quis maiores labore sed.',
    // default value
    size: 'md',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

// variants
export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
