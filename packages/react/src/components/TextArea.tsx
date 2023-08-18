import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const TextArea = styled('textarea', {
  background: '$gray900',
  boxSizing: 'border-box',
  borderRadius: '$sm',
  border: '2px solid $gray900',

  padding: '$4',
  resize: 'vertical',
  minHeight: 80,

  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
  color: '$white',

  '&:placeholder': {
    color: '$gray400',
  },

  '&:focus': {
    outline: 0,
    borderColor: '$ignite300',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

export interface TextAreaProps extends ComponentProps<typeof TextArea> {
  as?: ElementType
}

TextArea.displayName = 'TextArea' // what name appears in the storybook when you click 'show code'
