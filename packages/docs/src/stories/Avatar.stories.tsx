import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@ignite-ui/react'

// base component
export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    // content
    src: 'https://github.com/mateussantanasilva.png',
    alt: 'Foto de perfil de Mateus Santana',
  },
  argTypes: {
    src: {
      control: {
        type: 'text', // using the text field to change the value
      },
    },
  },
  tags: ['autodocs'], // enables auto-generated documentation for the component story
} as Meta<AvatarProps>

// variants
export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Usado quando a imagem de perfil não é carregada, sendo `undefined`',
      },
    },
  },
}
