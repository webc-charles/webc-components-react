import type { ComponentPropsWithRef, ReactNode } from 'react'

export type VideoRadius = 'none' | 'sm' | 'md' | 'lg'

export type VideoSource = {
  src: string
  type: string
}

export type VideoTrack = {
  src: string
  kind: 'subtitles' | 'captions' | 'descriptions' | 'chapters' | 'metadata'
  srclang: string
  label: string
  default?: boolean
}

export type VideoTypes = Omit<ComponentPropsWithRef<'video'>, 'src'> & {
  /** Video source URL (use sources for multiple formats) */
  src?: string
  /** Multiple video sources for browser compatibility */
  sources?: VideoSource[]
  /** Text tracks for captions, subtitles, descriptions */
  tracks?: VideoTrack[]
  /** Poster image URL */
  poster?: string
  /** Aspect ratio (e.g., "16/9", "4/3", "1/1") */
  aspectRatio?: string
  /** Border radius preset */
  radius?: VideoRadius
  /** Caption text displayed below the video */
  caption?: ReactNode
  /** Fallback content for unsupported browsers */
  fallback?: ReactNode
}
