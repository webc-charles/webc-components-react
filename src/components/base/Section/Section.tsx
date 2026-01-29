import { Title, type TitleTypes } from 'base'
import clsx from 'clsx'
import styles from './Section.module.scss'
import type { SectionHeaderTypes, SectionTypes } from './Section.types'

export function Section({ ref, className, children }: SectionTypes) {
  return (
    <section ref={ref} className={clsx(styles.section, className)}>
      {children}
    </section>
  )
}

export function SectionHeader({
  children,
  className,
}: SectionHeaderTypes) {
  return (
    <div className={clsx(styles.sectionHeader, className)}>{children}</div>
  )
}

export function SectionTitle({ children, level, className }: TitleTypes) {
  return (
    <Title level={level} className={clsx(styles.title, className)}>
      {children}
    </Title>
  )
}
