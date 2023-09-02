import { Meta, StoryObj } from '@storybook/react'
import { Box, Button, Tooltip, TooltipProps } from '@ignite-ui-ds/react'

// base component
export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {
    // content
    children: <Button size={'sm'}>Hover</Button>, // trigger
    content: '26 de Outubro - Disponível'
  },
  decorators: [
    (Story) => {
      return (
        <Box css={{
          display: 'flex',
          alignItems: 'center',
          padding: '$16'
        }}>
          {Story()}
        </Box>
      )
    }
  ],
  tags: ['autodocs'] // enables auto-generated documentation for the component story
} as Meta<TooltipProps>

// variants
export const Primary: StoryObj<TooltipProps> = {}