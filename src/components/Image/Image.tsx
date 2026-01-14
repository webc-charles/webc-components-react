import { useId } from 'react'
import clsx from 'clsx'
import { Slot } from 'utils'
import styles from './Image.module.scss'
import { ImageTypes } from './Image.types'

const fitStyles = {
  cover: styles.fitCover,
  contain: styles.fitContain,
  fill: styles.fitFill,
  none: styles.fitNone,
  'scale-down': styles.fitScaleDown,
}

const positionStyles = {
  center: styles.positionCenter,
  top: styles.positionTop,
  bottom: styles.positionBottom,
  left: styles.positionLeft,
  right: styles.positionRight,
  'top-left': styles.positionTopLeft,
  'top-right': styles.positionTopRight,
  'bottom-left': styles.positionBottomLeft,
  'bottom-right': styles.positionBottomRight,
}

const radiusStyles = {
  none: styles.radiusNone,
  small: styles.radiusSmall,
  medium: styles.radiusMedium,
  large: styles.radiusLarge,
  full: styles.radiusFull,
}

export function Image({
  ref,
  className,
  alt,
  fit,
  position,
  aspectRatio,
  radius,
  caption,
  style,
  asChild,
  children,
  ...props
}: ImageTypes) {
  const captionId = useId()

  const imageClass = clsx(
    styles.image,
    fit && fitStyles[fit],
    position && positionStyles[position],
    radius && radiusStyles[radius],
    !caption && className
  )

  const imageStyle = aspectRatio ? { ...style, aspectRatio } : style

  const img = asChild ? (
    <Slot className={imageClass} style={imageStyle}>
      {children}
    </Slot>
  ) : (
    <img
      ref={ref}
      className={imageClass}
      alt={alt}
      style={imageStyle}
      {...props}
    />
  )

  if (caption) {
    return (
      <figure
        role="group"
        aria-labelledby={captionId}
        className={clsx(styles.figure, className)}
      >
        {img}
        <figcaption id={captionId} className={styles.caption}>
          {caption}
        </figcaption>
      </figure>
    )
  }

  return img
}
