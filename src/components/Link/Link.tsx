import clsx from 'clsx'
import styles from './Link.module.scss'
import { LinkTypes } from './types'

export function Link({
  ref,
  href,
  fill,
  title,
  variant,
  disabled,
  children,
  className,
  ...rest
}: LinkTypes) {
  const content = children || title

  const classList = clsx(
    styles.link,
    fill ? styles.fill : '',
    variant ? styles[variant] : '',
    disabled && styles.disabled,
    className
  )

  return (
    <a
      ref={ref}
      href={href}
      title={title}
      className={classList}
      tabIndex={disabled ? -1 : 0}
      onClick={disabled ? (e) => e.preventDefault() : undefined}
      {...rest}
    >
      {content}
    </a>
  )
}
