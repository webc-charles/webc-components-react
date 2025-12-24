import { ComponentProps } from 'react'

export type InputDateTypes = ComponentProps<'div'> & {
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
