import { ComponentProps, Ref } from 'react'
import { ColorVariant } from '../../../types'

export type SwitchTypes = Omit<ComponentProps<'label'>, 'onChange' | 'ref'> & {
  checked?: boolean
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
  ref?: Ref<HTMLInputElement>
  label?: string
  labelClassName?: string
  disabled?: boolean
  variant?: ColorVariant
}
