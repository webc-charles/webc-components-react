import { ComponentProps } from 'react'

export type InputTextTypes = ComponentProps<'input'> & {
  label: string
  inputClassName?: string
  labelClassName?: string
}
