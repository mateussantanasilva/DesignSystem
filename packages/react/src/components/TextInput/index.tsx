import { ComponentProps, forwardRef, ElementRef } from 'react'
import { Input, Prefix, TextInputContainer } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
}

// ElementRef extracts the type of another component. 
// This component references Input
export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ prefix, ...props }: TextInputProps, ref) => {
    return (
      <TextInputContainer>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input ref={ref} {...props} />
      </TextInputContainer>
    )
  })

TextInput.displayName = 'TextInput' // what name appears in the storybook when you click 'show code'
