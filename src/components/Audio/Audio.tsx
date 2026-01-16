import { useId } from 'react'
import clsx from 'clsx'
import { useI18n } from 'i18n'
import styles from './Audio.module.scss'
import type { AudioTypes } from './Audio.types'

export function Audio({
  ref,
  src,
  sources,
  title,
  caption,
  transcriptUrl,
  transcriptLabel,
  fallback,
  className,
  controls = true,
  ...rest
}: AudioTypes) {
  const t = useI18n()
  const titleId = useId()
  const captionId = useId()
  const transcriptLabelText = transcriptLabel ?? t.view_transcript

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
          {t.audio_not_supported}
          {src && (
            <>
              {' '}
              {t.audio_fallback_link.split('{link}')[0]}
              <a href={src}>{t.audio_link}</a>
              {t.audio_fallback_link.split('{link}')[1]}
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
            {transcriptLabelText}
          </a>
        )}
      </figure>
    )
  }

  return <div className={className}>{audio}</div>
}
