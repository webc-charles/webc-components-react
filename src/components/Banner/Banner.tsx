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
  ref,
  backgroundImage,
  backgroundColor,
  overlay = 'none',
  minHeight = '40rem',
  className,
  style,
  children,
  horizontalAlign = 'left',
  verticalAlign = 'center',
  ...props
}: BannerTypes) {
  return (
    <div
      ref={ref}
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
      <div
        className={clsx(
          styles.container,
          styles[`horizontal-align-${horizontalAlign}`],
          styles[`vertical-align-${verticalAlign}`]
        )}
      >
        {children}
      </div>
    </div>
  )
}

export function BannerContent({
  ref,
  textAlign,
  textColor = 'dark',
  maxWidth,
  className,
  style,
  children,
  ...props
}: BannerContentTypes) {
  return (
    <div
      ref={ref}
      className={clsx(
        styles.content,
        textAlign && styles[`text-align-${textAlign}`],
        styles[`text-${textColor}`],
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
  ref,
  className,
  children,
  ...props
}: BannerSubtitleTypes) {
  return (
    <p ref={ref} className={clsx(styles.subtitle, className)} {...props}>
      {children}
    </p>
  )
}

export function BannerText({
  ref,
  className,
  children,
  ...props
}: BannerTextTypes) {
  return (
    <p ref={ref} className={clsx(styles.text, className)} {...props}>
      {children}
    </p>
  )
}

export function BannerActions({
  ref,
  className,
  children,
  ...props
}: BannerActionsTypes) {
  return (
    <div ref={ref} className={clsx(styles.actions, className)} {...props}>
      {children}
    </div>
  )
}
