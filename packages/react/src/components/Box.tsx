import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Box = styled('div', {
  padding: '$6',
  background: '$gray800',
  border: '1px solid $gray600',
  borderRadius: '$md',
})

export interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType // change type tag
}

Box.displayName = 'Box' // what name appears in the storybook when you click 'show code'
