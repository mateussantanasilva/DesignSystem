import { Toast, ToastProps } from "@ignite-ui-ds/react";
import { Meta, StoryObj } from "@storybook/react";
import { ToastButton } from "../components/ToastButton";

// base component
export default {
  title: 'Data display/Toast',
  parameters: {
    docs: {
      description: {
        story: 'Documentado com um botão que controla o Toast, mas na implementação tem o controle total.'
      }
    }
  },
  component: ToastButton,
  args: {
    // content
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
    // isOpen: true
  },
  tags: ['autodocs']
} as Meta<ToastProps>

// variants
export const Primary: StoryObj<ToastProps> = {}