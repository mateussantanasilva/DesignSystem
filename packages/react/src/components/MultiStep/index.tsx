import { Label, MultiStepContainer, Step, Steps } from './styles'

export interface MultiStepProps {
  size: number
  currentStep?: number
}

export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
  return (
    <MultiStepContainer>
      <Label>
        Passo {currentStep} de {size}
      </Label>

      <Steps css={{ '--steps-size': size }}>
        {/* 
          create array with based on size 
          _: does not use the first parameter (content)
        */}
        {Array.from({ length: size }, (_, index) => index + 1).map((step) => {
          return <Step key={step} active={currentStep >= step} />
        })}
      </Steps>
    </MultiStepContainer>
  )
}

MultiStep.displayName = 'MultiStep' // what name appears in the storybook when you click 'show code'
