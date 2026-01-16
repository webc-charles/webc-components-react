import { useMemo } from 'react'
import clsx from 'clsx'
import { Link } from 'components'
import { useI18n } from 'i18n'
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'
import styles from './Pagination.module.scss'
import type { PaginationTypes } from './Pagination.types'

type PageItem = number | 'ellipsis'

function generatePageRange(
  currentPage: number,
  totalPages: number,
  siblingCount: number,
  boundaryCount: number
): PageItem[] {
  const range = (start: number, end: number) =>
    Array.from({ length: end - start + 1 }, (_, i) => start + i)

  const totalNumbers = siblingCount * 2 + 3 + boundaryCount * 2

  if (totalNumbers >= totalPages) {
    return range(1, totalPages)
  }

  const leftSiblingIndex = Math.max(
    currentPage - siblingCount,
    boundaryCount + 1
  )
  const rightSiblingIndex = Math.min(
    currentPage + siblingCount,
    totalPages - boundaryCount
  )

  const showLeftEllipsis = leftSiblingIndex > boundaryCount + 2
  const showRightEllipsis =
    rightSiblingIndex < totalPages - boundaryCount - 1

  const leftBoundary = range(1, boundaryCount)
  const rightBoundary = range(totalPages - boundaryCount + 1, totalPages)

  if (!showLeftEllipsis && showRightEllipsis) {
    const leftItemCount = siblingCount * 2 + boundaryCount + 2
    const leftRange = range(1, leftItemCount)
    return [...leftRange, 'ellipsis', ...rightBoundary]
  }

  if (showLeftEllipsis && !showRightEllipsis) {
    const rightItemCount = siblingCount * 2 + boundaryCount + 2
    const rightRange = range(totalPages - rightItemCount + 1, totalPages)
    return [...leftBoundary, 'ellipsis', ...rightRange]
  }

  const middleRange = range(leftSiblingIndex, rightSiblingIndex)
  return [
    ...leftBoundary,
    'ellipsis',
    ...middleRange,
    'ellipsis',
    ...rightBoundary,
  ]
}

export function Pagination({
  ref,
  currentPage,
  totalPages,
  onPageChange,
  getPageHref = (page) => `?page=${page}`,
  renderLink,
  siblingCount = 1,
  boundaryCount = 1,
  showFirstLast = false,
  showPrevNext = true,
  disabled = false,
  className,
  'aria-label': ariaLabel,
  ...rest
}: PaginationTypes) {
  const t = useI18n()

  const pages = useMemo(
    () =>
      generatePageRange(
        currentPage,
        totalPages,
        siblingCount,
        boundaryCount
      ),
    [currentPage, totalPages, siblingCount, boundaryCount]
  )

  const handleClick = (e: React.MouseEvent, page: number) => {
    if (onPageChange) {
      e.preventDefault()
      onPageChange(page)
    }
  }

  const renderPageLink = (
    page: number,
    children: React.ReactNode,
    ariaLabel: string,
    isCurrent = false
  ) => {
    const isDisabled = disabled || isCurrent

    if (isDisabled) {
      return (
        <span
          aria-label={ariaLabel}
          aria-current={isCurrent ? 'page' : undefined}
          aria-disabled="true"
          className={clsx(
            styles.page,
            isCurrent && styles.current,
            styles.disabled
          )}
        >
          {children}
        </span>
      )
    }

    if (renderLink) {
      return (
        <span className={styles.page}>{renderLink(page, children)}</span>
      )
    }

    return (
      <Link
        href={getPageHref(page)}
        aria-label={ariaLabel}
        className={styles.page}
        onClick={(e) => handleClick(e, page)}
      >
        {children}
      </Link>
    )
  }

  const renderNavLink = (
    page: number,
    children: React.ReactNode,
    ariaLabel: string,
    isDisabled: boolean
  ) => {
    const linkDisabled = disabled || isDisabled

    if (linkDisabled) {
      return (
        <span
          aria-label={ariaLabel}
          aria-disabled="true"
          className={clsx(styles.nav, styles.disabled)}
        >
          {children}
        </span>
      )
    }

    if (renderLink) {
      return (
        <span className={styles.nav}>{renderLink(page, children)}</span>
      )
    }

    return (
      <Link
        href={getPageHref(page)}
        aria-label={ariaLabel}
        className={styles.nav}
        onClick={(e) => handleClick(e, page)}
      >
        {children}
      </Link>
    )
  }

  if (totalPages <= 1) return null

  return (
    <nav
      ref={ref}
      aria-label={ariaLabel ?? t.pagination}
      className={clsx(
        styles.pagination,
        disabled && styles.disabled,
        className
      )}
      {...rest}
    >
      <ul className={styles.list}>
        {showFirstLast && (
          <li>
            {renderNavLink(
              1,
              <ChevronsLeft size={18} aria-hidden="true" />,
              t.first_page,
              currentPage === 1
            )}
          </li>
        )}

        {showPrevNext && (
          <li>
            {renderNavLink(
              currentPage - 1,
              <ChevronLeft size={18} aria-hidden="true" />,
              t.previous_page,
              currentPage === 1
            )}
          </li>
        )}

        {pages.map((page, index) => (
          <li key={index}>
            {page === 'ellipsis' ? (
              <span className={styles.ellipsis} aria-hidden="true">
                …
              </span>
            ) : (
              renderPageLink(
                page,
                page,
                t.page_n.replace('{n}', String(page)),
                page === currentPage
              )
            )}
          </li>
        ))}

        {showPrevNext && (
          <li>
            {renderNavLink(
              currentPage + 1,
              <ChevronRight size={18} aria-hidden="true" />,
              t.next_page,
              currentPage === totalPages
            )}
          </li>
        )}

        {showFirstLast && (
          <li>
            {renderNavLink(
              totalPages,
              <ChevronsRight size={18} aria-hidden="true" />,
              t.last_page,
              currentPage === totalPages
            )}
          </li>
        )}
      </ul>
    </nav>
  )
}
