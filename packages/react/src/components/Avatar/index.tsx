import { User } from 'phosphor-react'
import { AvatarContainer, AvatarFallback, AvatarImage } from './styles'
import { ComponentProps } from 'react'

export type AvatarProps = ComponentProps<typeof AvatarImage>

export function Avatar(props: AvatarProps) {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />

      {/* await 600ms to load */}
      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}

Avatar.displayName = 'Avatar' // what name appears in the storybook when you click 'show code'
