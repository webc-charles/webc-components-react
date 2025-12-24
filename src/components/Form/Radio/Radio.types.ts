import { ComponentProps } from 'react'

export type RadioOptionTypes = {
  value: string
  label: string
  disabled?: boolean
}

export type InputRadioTypes = Omit<
  ComponentProps<'input'>,
  'onChange' | 'value'
> & {
  value?: string
  onChange?: (value: string) => void
  options: RadioOptionTypes[]
  name: string
  label?: string
  optionClassName?: string
  labelClassName?: string
  direction?: 'vertical' | 'horizontal'
}
