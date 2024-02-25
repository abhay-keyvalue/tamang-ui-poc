import { styled, YStack } from 'tamagui'

export const TestComponent = styled(YStack, {
  name: 'TestComponent',
  backgroundColor: 'red',

  variants: {
    blue: {
      true: {
        backgroundColor: 'blue',
      },
    },
  } as const,
})
