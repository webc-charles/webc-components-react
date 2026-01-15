import { useState } from 'react'

import clsx from 'clsx'
import { User } from 'lucide-react'

import styles from './Avatar.module.scss'
import type { AvatarTypes } from './Avatar.types'

const getInitials = (name: string): string => {
  const parts = name.trim().split(/\s+/)
  if (parts.length === 1) {
    return parts[0].charAt(0).toUpperCase()
  }
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase()
}

const iconSizes = {
  sm: 14,
  md: 18,
  lg: 24,
  xl: 32,
}

export function Avatar({
  ref,
  src,
  alt = '',
  name,
  size = 'md',
  variant = 'default',
  className,
  ...rest
}: AvatarTypes) {
  const [imgError, setImgError] = useState(false)

  const showImage = src && !imgError
  const initials = name ? getInitials(name) : null

  return (
    <div
      ref={ref}
      role="img"
      aria-label={alt || name || 'Avatar'}
      className={clsx(
        styles.avatar,
        styles[`size-${size}`],
        styles[`variant-${variant}`],
        className
      )}
      {...rest}
    >
      {showImage ? (
        <img
          src={src}
          alt={alt}
          onError={() => setImgError(true)}
          className={styles.image}
        />
      ) : initials ? (
        <span className={styles.initials}>{initials}</span>
      ) : (
        <User size={iconSizes[size]} aria-hidden />
      )}
    </div>
  )
}
