import { ComponentProps } from 'react'

export type InputTextareaTypes = Omit<
  ComponentProps<'textarea'>,
  'onChange' | 'value'
> & {
  value?: string
  onChange?: (value: string) => void
  label?: string
  textareaClassName?: string
  labelClassName?: string
  showCount?: boolean
}
