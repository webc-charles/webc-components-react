import clsx from 'clsx'
import { Title } from 'components'
import styles from './Banner.module.scss'
import {
  BannerActionsTypes,
  BannerContentTypes,
  BannerSubtitleTypes,
  BannerTextTypes,
  BannerTitleTypes,
  BannerTypes,
} from './Banner.types'

export function Banner({
  backgroundImage,
  backgroundColor,
  overlay = 'none',
  minHeight = '40rem',
  className,
  style,
  children,
  ...props
}: BannerTypes) {
  return (
    <div
      className={clsx(
        styles.banner,
        overlay !== 'none' && styles[`overlay-${overlay}`],
        className
      )}
      style={{
        ...style,
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
        backgroundColor,
        minHeight,
      }}
      {...props}
    >
      <div className={styles.container}>{children}</div>
    </div>
  )
}

export function BannerContent({
  align = 'left',
  justify = 'center',
  textColor = 'dark',
  maxWidth,
  className,
  style,
  children,
  ...props
}: BannerContentTypes) {
  return (
    <div
      className={clsx(
        styles.content,
        styles[`align-${align}`],
        styles[`text-${textColor}`],
        styles[`justify-${justify}`],
        className
      )}
      style={{ ...style, maxWidth }}
      {...props}
    >
      {children}
    </div>
  )
}

export function BannerTitle({
  level = 'h1',
  className,
  children,
  ...props
}: BannerTitleTypes) {
  return (
    <Title level={level} className={clsx(styles.title, className)} {...props}>
      {children}
    </Title>
  )
}

export function BannerSubtitle({
  className,
  children,
  ...props
}: BannerSubtitleTypes) {
  return (
    <p className={clsx(styles.subtitle, className)} {...props}>
      {children}
    </p>
  )
}

export function BannerText({ className, children, ...props }: BannerTextTypes) {
  return (
    <p className={clsx(styles.text, className)} {...props}>
      {children}
    </p>
  )
}

export function BannerActions({
  direction = 'horizontal',
  className,
  children,
  ...props
}: BannerActionsTypes) {
  return (
    <div
      className={clsx(styles.actions, styles[direction], className)}
      {...props}
    >
      {children}
    </div>
  )
}
