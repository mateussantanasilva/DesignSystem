import type { Meta, StoryObj } from '@storybook/react'
import { Box, MultiStep, MultiStepProps } from '@ignite-ui-ds/react'

// base component
export default {
  title: 'Form/Multi Step',
  component: MultiStep,
  args: {
    // content
    size: 4,
    currentStep: 1,
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
          {Story()}
        </Box>
      )
    },
  ],
  tags: ['autodocs'], // enables auto-generated documentation for the component story
} as Meta<MultiStepProps>

// variants
export const Primary: StoryObj<MultiStepProps> = {}

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
}
