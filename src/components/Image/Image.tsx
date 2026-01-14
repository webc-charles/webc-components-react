import { useId, ElementType } from 'react'
import clsx from 'clsx'
import styles from './Image.module.scss'
import { ImageTypes } from './Image.types'

const fitClassMap = {
  cover: styles.fitCover,
  contain: styles.fitContain,
  fill: styles.fitFill,
  none: styles.fitNone,
  'scale-down': styles.fitScaleDown,
}

const positionClassMap = {
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

const radiusClassMap = {
  none: styles.radiusNone,
  small: styles.radiusSmall,
  medium: styles.radiusMedium,
  large: styles.radiusLarge,
  full: styles.radiusFull,
}

export function Image({
  as,
  ref,
  className,
  alt,
  fit,
  position,
  aspectRatio,
  radius,
  caption,
  style,
  ...props
}: ImageTypes) {
  const Component: ElementType = as || 'img'
  const captionId = useId()

  const imageClass = clsx(
    styles.image,
    fit && fitClassMap[fit],
    position && positionClassMap[position],
    radius && radiusClassMap[radius],
    !caption && className
  )

  const imageStyle = aspectRatio ? { ...style, aspectRatio } : style

  const img = (
    <Component
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
