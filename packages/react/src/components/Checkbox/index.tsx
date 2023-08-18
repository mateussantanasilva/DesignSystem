import { ComponentProps } from 'react'
import { Check } from 'phosphor-react'
import { CheckboxContainer, CheckboxIndicator } from './styles'

export type CheckboxProps = ComponentProps<typeof CheckboxContainer>

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxContainer {...props}>
      <CheckboxIndicator asChild>
        {/* works as child */}
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxContainer>
  )
}

Checkbox.displayName = 'Checkbox' // what name appears in the storybook when you click 'show code'
