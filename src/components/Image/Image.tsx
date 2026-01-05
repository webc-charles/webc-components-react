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
  ref,
  className,
  alt,
  fit,
  position,
  aspectRatio,
  radius,
  style,
  ...props
}: ImageTypes) {
  const classList = clsx(
    styles.image,
    fit && fitClassMap[fit],
    position && positionClassMap[position],
    radius && radiusClassMap[radius],
    className
  )

  const imageStyle = aspectRatio ? { ...style, aspectRatio } : style

  return (
    <img
      ref={ref}
      className={classList}
      alt={alt}
      style={imageStyle}
      {...props}
    />
  )
}
