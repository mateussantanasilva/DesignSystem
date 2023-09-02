import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { styled } from '../../styles';

export const TooltipContent = styled(TooltipPrimitive.Content, {
  background: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxShadow: '4px 16px 24px 0px rgba(0, 0, 0, 0.25)',

  color: '$gray100',
  textAlign: 'center',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$medium',
  lineHeight: '$short',
})

export const TooltipArrow = styled(TooltipPrimitive.Arrow, {
  fill: '$gray900',
  marginBottom: '.12rem'
})