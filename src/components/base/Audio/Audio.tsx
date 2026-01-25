import { useId } from 'react'
import clsx from 'clsx'
import styles from './Audio.module.scss'
import type { AudioTypes } from './Audio.types'

export function Audio({
  ref,
  src,
  sources,
  title,
  caption,
  transcriptUrl,
  transcriptLabel = 'View transcript',
  fallback,
  className,
  controls = true,
  ...rest
}: AudioTypes) {
  const titleId = useId()
  const captionId = useId()

  const audio = (
    <audio
      ref={ref}
      src={!sources?.length ? src : undefined}
      controls={controls}
      className={styles.audio}
      aria-labelledby={title ? titleId : undefined}
      aria-describedby={caption ? captionId : undefined}
      {...rest}
    >
      {sources?.map((source) => (
        <source key={source.src} src={source.src} type={source.type} />
      ))}

      {fallback || (
        <p>
          Your browser doesn't support HTML audio.
          {src && (
            <>
              {' '}
              Here is a <a href={src}>link to the audio</a> instead.
            </>
          )}
        </p>
      )}
    </audio>
  )

  if (title || caption || transcriptUrl) {
    return (
      <figure role="group" className={clsx(styles.figure, className)}>
        {title && (
          <figcaption id={titleId} className={styles.title}>
            {title}
          </figcaption>
        )}

        {audio}

        {caption && (
          <p id={captionId} className={styles.caption}>
            {caption}
          </p>
        )}

        {transcriptUrl && (
          <a href={transcriptUrl} className={styles.transcript}>
            {transcriptLabel}
          </a>
        )}
      </figure>
    )
  }

  return <div className={className}>{audio}</div>
}
