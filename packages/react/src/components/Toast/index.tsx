import * as ToastPrimitive from '@radix-ui/react-toast'
import { ToastClose, ToastDescription, ToastRoot, ToastTitle, ToastViewport } from './styles'
import { X } from 'phosphor-react'
import { ComponentProps } from 'react'

export interface ToastProps extends ComponentProps<typeof ToastRoot> {
  title: string
  description: string
}

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <ToastPrimitive.Provider>
      <ToastRoot {...props}>
        <ToastTitle>{title}</ToastTitle>

        <ToastDescription>{description}</ToastDescription>

        <ToastClose>
          <X size={'1.2rem'} />
        </ToastClose>
      </ToastRoot>

      <ToastViewport />
    </ToastPrimitive.Provider>
  )
}

Toast.displayName = 'Toast'