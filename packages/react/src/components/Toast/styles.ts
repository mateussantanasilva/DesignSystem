import * as ToastPrimitive from '@radix-ui/react-toast'
import { styled } from "../../styles";

export const ToastRoot = styled(ToastPrimitive.Root, {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',

  position: 'relative',
  padding: '$3 $5',

  background: '$gray800',
  border: '1px solid $gray600',
  borderRadius: '$sm',
})

export const ToastTitle = styled(ToastPrimitive.Title, {
  color: '$white',
  fontFamily: '$default',
  fontSize: '$xl',
  fontWeight: '$bold',
  lineHeight: '$base',

  width: '20rem',
})

export const ToastDescription = styled(ToastPrimitive.Description, {
  color: '$gray200',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
  lineHeight: '$base'
})

export const ToastClose = styled(ToastPrimitive.Close, {
  all: 'unset',

  position: 'absolute',
  top: '$4',
  right: '$4',

  cursor: 'pointer',
  fontSize: '$xs',
  color: '$gray200'
})

export const ToastViewport = styled(ToastPrimitive.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,

  padding: '$8',
  margin: 0,

  display: 'flex',
  flexDirection: 'column',
  gap: '$3',

  maxWidth: '100vw',
  zIndex: 9999, 
})