import * as Checkbox from '@radix-ui/react-checkbox'
import { styled, keyframes } from '../../styles'

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  boxSizing: 'border-box',
  overflow: 'hidden',
  width: '$6',
  height: '$6',
  cursor: 'pointer',

  background: '$gray900',
  borderRadius: '$xs',
  border: '2px solid $gray900',

  lineHeight: 0,

  '&[data-state="checked"]': {
    background: '$ignite300',
  },

  '&:focus': {
    borderColor: '$ignite300',
  },
})

const slideIn = keyframes({
  from: {
    transform: 'translateY(-100%)',
  },
  to: {
    transform: 'translateY(0)',
  },
})

const slideOut = keyframes({
  from: {
    transform: 'translateY(0)',
  },
  to: {
    transform: 'translateY(-100%)',
  },
})

export const CheckboxIndicator = styled(Checkbox.CheckboxIndicator, {
  color: '$white',
  width: '$4',
  height: '$4',

  '&[data-state="checked"]': {
    animation: `${slideIn} .2s ease-out`,
  },

  '&[data-state="unchecked"]': {
    animation: `${slideOut} .2s ease-out`,
  },
})
