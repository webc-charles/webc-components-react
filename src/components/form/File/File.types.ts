import type { ComponentPropsWithRef } from 'react'

export type InputFileTypes = Omit<
  ComponentPropsWithRef<'input'>,
  'type' | 'onChange' | 'value'
> & {
  /** Label text */
  label?: string
  /** Custom class for the label */
  labelClassName?: string
  /** Custom class for the trigger button */
  buttonClassName?: string
  /** Callback when files change */
  onChange?: (files: FileList | null) => void
  /** Enable drag and drop zone */
  dropzone?: boolean
  /** Text for the button */
  buttonText?: string
  /** Show selected file names */
  showFileNames?: boolean
  /** Accepted file types (e.g., ".jpg,.png", "image/*", "application/pdf") */
  accept?: string
}
