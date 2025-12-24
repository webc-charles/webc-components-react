import { ComponentProps } from 'react'

export type InputPasswordTypes = Omit<ComponentProps<'input'>, 'type'> & {
  label: string
  inputClassName?: string
  labelClassName?: string
}
