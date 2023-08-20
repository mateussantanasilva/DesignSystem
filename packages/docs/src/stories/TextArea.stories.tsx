import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextArea, TextAreaProps } from '@ignite-ui-ds/react'

// base component
export default {
  title: 'Form/Text Area',
  component: TextArea,
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
          <Text size="sm">Observations</Text>
          {Story()}
        </Box>
      )
    },
  ],
  tags: ['autodocs'], // enables auto-generated documentation for the component story
} as Meta<TextAreaProps>

// variants
export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Add any observations...',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
