import { useId } from 'react'
import clsx from 'clsx'
import styles from './Image.module.scss'
import { ImageTypes } from './Image.types'

export const imageClassMap = {
  base: styles.image,
  figure: styles.figure,
  caption: styles.caption,
  fit: {
    cover: styles.fitCover,
    contain: styles.fitContain,
    fill: styles.fitFill,
    none: styles.fitNone,
    'scale-down': styles.fitScaleDown,
  },
  position: {
    center: styles.positionCenter,
    top: styles.positionTop,
    bottom: styles.positionBottom,
    left: styles.positionLeft,
    right: styles.positionRight,
    'top-left': styles.positionTopLeft,
    'top-right': styles.positionTopRight,
    'bottom-left': styles.positionBottomLeft,
    'bottom-right': styles.positionBottomRight,
  },
  radius: {
    none: styles.radiusNone,
    small: styles.radiusSmall,
    medium: styles.radiusMedium,
    large: styles.radiusLarge,
    full: styles.radiusFull,
  },
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
  ...props
}: ImageTypes) {
  const captionId = useId()

  const imageClass = clsx(
    imageClassMap.base,
    fit && imageClassMap.fit[fit],
    position && imageClassMap.position[position],
    radius && imageClassMap.radius[radius],
    !caption && className
  )

  const imageStyle = aspectRatio ? { ...style, aspectRatio } : style

  const img = (
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
        className={clsx(imageClassMap.figure, className)}
      >
        {img}
        <figcaption id={captionId} className={imageClassMap.caption}>
          {caption}
        </figcaption>
      </figure>
    )
  }

  return img
}
