import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@ignite-ui-ds/react'

// base component
export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    // content
    children: 'Custom title',
    // default style
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '3xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
  tags: ['autodocs'], // enables auto-generated documentation for the component story
} as Meta<HeadingProps>

// variants
export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`.', // `h2 and as` transforms in markdown
      },
    },
  },
}
