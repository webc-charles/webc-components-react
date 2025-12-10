import clsx from 'clsx'
import styles from './Grid.module.scss'
import { GridTypes } from './types'

export function Grid({
  children,
  gap,
  gapXS,
  gapSM,
  gapMD,
  gapLG,
  gapXL,
  col,
  colXS,
  colSM,
  colMD,
  colLG,
  colXL,
  className,
  ...rest
}: GridTypes) {
  const colClasses = clsx(
    col && styles[`grid--${col}`],
    colXS && styles[`grid--xs-${colXS}`],
    colSM && styles[`grid--sm-${colSM}`],
    colMD && styles[`grid--md-${colMD}`],
    colLG && styles[`grid--lg-${colLG}`],
    colXL && styles[`grid--xl-${colXL}`]
  )

  const gapClasses = clsx(
    gap && styles[`grid--gap-${gap}`],
    gapXS && styles[`grid--gap-xs-${gapXS}`],
    gapSM && styles[`grid--gap-sm-${gapSM}`],
    gapMD && styles[`grid--gap-md-${gapMD}`],
    gapLG && styles[`grid--gap-lg-${gapLG}`],
    gapXL && styles[`grid--gap-xl-${gapXL}`]
  )

  const gridClasses = clsx(styles.grid, gapClasses, colClasses, className)

  return (
    <div className={gridClasses} {...rest}>
      {children}
    </div>
  )
}
