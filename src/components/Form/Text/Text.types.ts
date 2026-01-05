import { ComponentPropsWithRef } from 'react'

export type InputTextTypes = ComponentPropsWithRef<'input'> & {
  label?: string
  inputClassName?: string
  labelClassName?: string
}
