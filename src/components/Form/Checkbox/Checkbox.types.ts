import { ComponentProps } from 'react'

export type CheckboxTypes = Omit<ComponentProps<'label'>, 'onChange'> & {
  checked: boolean
  onChange: (checked: boolean) => void
  label?: string
  labelClassName?: string
  disabled?: boolean
}
