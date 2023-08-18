import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, Checkbox, CheckboxProps } from '@ignite-ui/react'

// base component
export default {
  title: 'Form/Checkbox',
  component: Checkbox,
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
          css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
        >
          {Story()}
          <Text size="sm">Accept terms of use</Text>
        </Box>
      )
    },
  ],
  tags: ['autodocs'], // enables auto-generated documentation for the component story
} as Meta<CheckboxProps>

// variants
export const Primary: StoryObj<CheckboxProps> = {}
