import { useId } from 'react'

import clsx from 'clsx'

import styles from './Video.module.scss'
import type { VideoTypes } from './Video.types'

const radiusClassMap = {
  none: styles.radiusNone,
  sm: styles.radiusSm,
  md: styles.radiusMd,
  lg: styles.radiusLg,
}

export function Video({
  ref,
  src,
  sources,
  tracks,
  poster,
  aspectRatio,
  radius,
  caption,
  fallback,
  className,
  style,
  controls = true,
  ...rest
}: VideoTypes) {
  const captionId = useId()

  const videoClass = clsx(
    styles.video,
    radius && radiusClassMap[radius],
    !caption && className
  )

  const videoStyle = aspectRatio ? { ...style, aspectRatio } : style

  const video = (
    <video
      ref={ref}
      src={!sources?.length ? src : undefined}
      poster={poster}
      controls={controls}
      className={videoClass}
      style={videoStyle}
      {...rest}
    >
      {sources?.map((source) => (
        <source key={source.src} src={source.src} type={source.type} />
      ))}

      {tracks?.map((track) => (
        <track
          key={`${track.src}-${track.srclang}`}
          src={track.src}
          kind={track.kind}
          srcLang={track.srclang}
          label={track.label}
          default={track.default}
        />
      ))}

      {fallback || (
        <p>
          Your browser doesn&apos;t support HTML video.
          {src && (
            <>
              {' '}
              Here is a <a href={src}>link to the video</a> instead.
            </>
          )}
        </p>
      )}
    </video>
  )

  if (caption) {
    return (
      <figure
        role="group"
        aria-labelledby={captionId}
        className={clsx(styles.figure, className)}
      >
        {video}

        <figcaption id={captionId} className={styles.caption}>
          {caption}
        </figcaption>
      </figure>
    )
  }

  return video
}
