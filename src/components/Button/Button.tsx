import { forwardRef } from 'react'
import clsx from 'clsx'
import styles from './Button.module.scss'
import { ButtonRef, ButtonTypes } from './types'

export const Button = forwardRef<ButtonRef, ButtonTypes>(
  (
    {
      link,
      title,
      action,
      disabled,
      children,
      className,
      type = 'button',
      variant,
      ariaLabel,
    }: ButtonTypes,
    ref
  ) => {
    const content = children || title
    const baseClass = link ? styles.link : styles.button
    const variantClass = variant ? styles[variant] : ''
    const classList = clsx(
      baseClass,
      variantClass,
      disabled && styles.disabled,
      className
    )

    if (!link && !action) {
      return (
        <div ref={ref as React.Ref<HTMLDivElement>} className={className}>
          {content}
        </div>
      )
    }

    if (link && typeof link === 'string') {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={link}
          title={title}
          className={classList}
          tabIndex={disabled ? -1 : 0}
          onClick={disabled ? (e) => e.preventDefault() : undefined}
          aria-label={ariaLabel}
        >
          {content}
        </a>
      )
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type}
        title={title}
        onClick={action}
        disabled={disabled}
        className={classList}
        aria-label={ariaLabel}
      >
        {content}
      </button>
    )
  }
)
