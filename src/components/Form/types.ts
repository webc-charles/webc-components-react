export type InputNumberTypes = {
  value?: number
  onChange?: (value: number) => void
  min?: number
  max?: number
  step?: number
  disabled?: boolean
  label?: string
  className?: string
  inputClassName?: string
  labelClassName?: string
  placeholder?: string
  incrementLabel?: string
  decrementLabel?: string
}

export type InputDateTypes = {
  selected: Date | null
  onChange: (date: Date | null) => void
  onBlur?: () => void
  placeholder?: string
  dateFormat?: string
  minDate?: Date
  maxDate?: Date
  disabled?: boolean
  className?: string
  title?: string
}

export type CheckboxTypes = {
  checked: boolean
  onChange: (checked: boolean) => void
  label?: string
  disabled?: boolean
  className?: string
  labelClassName?: string
}
