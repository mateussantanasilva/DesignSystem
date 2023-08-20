import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@ignite-ui-ds/react'

// base component
export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    // content
    children: <Text>Testando o elemento Box</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null, // remove control option
      },
    },
  },
} as Meta<BoxProps>

// variants
export const Primary: StoryObj<BoxProps> = {}
