import clsx from 'clsx'

import styles from './Iframe.module.scss'
import type { IframeTypes } from './Iframe.types'

export function Iframe({
  ref,
  src,
  title,
  aspectRatio = '16/9',
  allowFullScreen = true,
  className,
  style,
  loading = 'lazy',
  ...rest
}: IframeTypes) {
  const iframeStyle = aspectRatio ? { ...style, aspectRatio } : style

  return (
    <iframe
      ref={ref}
      src={src}
      title={title}
      loading={loading}
      allowFullScreen={allowFullScreen}
      className={clsx(styles.iframe, className)}
      style={iframeStyle}
      {...rest}
    />
  )
}
