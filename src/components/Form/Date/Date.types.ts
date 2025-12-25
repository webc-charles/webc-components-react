import { ComponentProps } from 'react'

export type InputDateTypes = Omit<ComponentProps<'div'>, 'onChange'> & {
  selected: Date | null
  onChange: (date: Date | null) => void
  onBlur?: () => void
  placeholder?: string
  dateFormat?: string
  minDate?: Date
  maxDate?: Date
  disabled?: boolean
  title?: string
}
