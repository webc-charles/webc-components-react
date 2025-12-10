declare module 'react-custom-checkbox' {
  import { FC, CSSProperties, ReactNode } from 'react'

  export interface CustomCheckboxProps {
    checked: boolean
    onChange: (
      checked: boolean,
      event: React.ChangeEvent<HTMLInputElement>
    ) => void
    icon?: ReactNode
    borderColor?: string
    borderRadius?: number
    borderWidth?: number
    size?: number
    disabled?: boolean
    className?: string
    style?: CSSProperties
    label?: string
    labelClassName?: string
    labelStyle?: CSSProperties
    containerClassName?: string
    containerStyle?: CSSProperties
    tabIndex?: number
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  }

  const CustomCheckbox: FC<CustomCheckboxProps>
  export default CustomCheckbox
}
