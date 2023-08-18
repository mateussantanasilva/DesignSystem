import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@ignite-ui/react'

// base component
export default {
  title: 'Form/Text Input',
  component: TextInput,
  args: {
    // content
  },
  decorators: [
    // customize the view with new components
    (Story) => {
      // Story renders the current component
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Email address</Text>
          {Story()}
        </Box>
      )
    },
  ],
  tags: ['autodocs'], // enables auto-generated documentation for the component story
} as Meta<TextInputProps>

// variants
export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
  },
}
