import { useCallback, useId, useMemo, useRef, useState } from 'react'
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react'
import clsx from 'clsx'
import { str } from 'i18n'
import { Modal } from 'components/Modal'
import styles from './Date.module.scss'
import { InputDateTypes } from './Date.types'

// Calendar utility functions
const getDaysInMonth = (year: number, month: number): number => {
  return new Date(year, month + 1, 0).getDate()
}

const getFirstDayOfMonth = (year: number, month: number): number => {
  return new Date(year, month, 1).getDay()
}

const isSameDay = (date1: Date, date2: Date): boolean => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  )
}

const isDateDisabled = (
  date: Date,
  minDate?: Date,
  maxDate?: Date
): boolean => {
  if (minDate) {
    const min = new Date(minDate)
    min.setHours(0, 0, 0, 0)
    if (date < min) return true
  }
  if (maxDate) {
    const max = new Date(maxDate)
    max.setHours(23, 59, 59, 999)
    if (date > max) return true
  }
  return false
}

const formatDate = (date: Date | null, format: string): string => {
  if (!date) return ''

  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  return format
    .replace('yyyy', String(year))
    .replace('MM', month)
    .replace('dd', day)
}

export function InputDate({
  selected,
  onChange,
  onBlur,
  placeholder = str.select_date,
  dateFormat = 'yyyy-MM-dd',
  minDate,
  maxDate,
  disabled = false,
  label,
  className,
  ...rest
}: InputDateTypes) {
  const id = useId()
  const [isOpen, setIsOpen] = useState(false)
  const [viewDate, setViewDate] = useState(() => selected || new Date())

  const triggerRef = useRef<HTMLButtonElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  const today = useMemo(() => new Date(), [])

  const year = viewDate.getFullYear()
  const month = viewDate.getMonth()
  const daysInMonth = getDaysInMonth(year, month)
  const firstDayOfMonth = getFirstDayOfMonth(year, month)

  // Generate calendar days
  const calendarDays = useMemo(() => {
    const days: (Date | null)[] = []

    // Add empty slots for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null)
    }

    // Add actual days
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day))
    }

    return days
  }, [year, month, daysInMonth, firstDayOfMonth])

  const handleOpen = useCallback(() => {
    if (disabled) return
    setViewDate(selected || new Date())
    setIsOpen(true)
  }, [disabled, selected])

  const handleClose = useCallback(() => {
    setIsOpen(false)
    setTimeout(() => triggerRef.current?.focus(), 0)
  }, [])

  const handleSelectDate = useCallback(
    (date: Date) => {
      if (isDateDisabled(date, minDate, maxDate)) return
      onChange(date)
      handleClose()
    },
    [onChange, handleClose, minDate, maxDate]
  )

  const handlePrevMonth = useCallback(() => {
    setViewDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1))
  }, [])

  const handleNextMonth = useCallback(() => {
    setViewDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1))
  }, [])

  // Keyboard navigation for calendar grid
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, date: Date | null) => {
      if (!date) return

      const currentIndex = calendarDays.findIndex(
        (d) => d && isSameDay(d, date)
      )
      let newIndex = currentIndex
      let newDate: Date | null = null

      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault()
          newIndex = currentIndex - 1
          break
        case 'ArrowRight':
          e.preventDefault()
          newIndex = currentIndex + 1
          break
        case 'ArrowUp':
          e.preventDefault()
          newIndex = currentIndex - 7
          break
        case 'ArrowDown':
          e.preventDefault()
          newIndex = currentIndex + 7
          break
        case 'Enter':
        case ' ':
          e.preventDefault()
          handleSelectDate(date)
          return
        default:
          return
      }

      // Handle month boundary navigation
      if (newIndex < firstDayOfMonth) {
        // Go to previous month
        const prevMonthDays = getDaysInMonth(year, month - 1)
        const daysBack = firstDayOfMonth - newIndex
        newDate = new Date(year, month - 1, prevMonthDays - daysBack + 1)
        setViewDate(new Date(year, month - 1, 1))
      } else if (newIndex >= calendarDays.length) {
        // Go to next month
        const daysForward = newIndex - calendarDays.length + 1
        newDate = new Date(year, month + 1, daysForward)
        setViewDate(new Date(year, month + 1, 1))
      } else {
        newDate = calendarDays[newIndex]
      }

      // Focus the new date button after render
      if (newDate) {
        setTimeout(() => {
          const buttons = gridRef.current?.querySelectorAll('button[data-date]')
          buttons?.forEach((btn) => {
            if (btn.getAttribute('data-date') === newDate!.toISOString()) {
              ;(btn as HTMLButtonElement).focus()
            }
          })
        }, 0)
      }
    },
    [calendarDays, firstDayOfMonth, year, month, handleSelectDate]
  )

  // Focus selected/today day when modal content mounts
  const handleModalReady = useCallback(() => {
    setTimeout(() => {
      const selectedBtn = gridRef.current?.querySelector(
        'button[data-selected="true"]'
      ) as HTMLButtonElement
      const todayBtn = gridRef.current?.querySelector(
        'button[data-today="true"]'
      ) as HTMLButtonElement
      const firstBtn = gridRef.current?.querySelector(
        'button[data-date]:not(:disabled)'
      ) as HTMLButtonElement

      ;(selectedBtn || todayBtn || firstBtn)?.focus()
    }, 50)
  }, [])

  return (
    <div className={clsx(styles.wrapper, className)} {...rest}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}

      <div className={styles.inputWrapper}>
        <input
          id={id}
          type="text"
          readOnly
          disabled={disabled}
          placeholder={placeholder}
          value={formatDate(selected, dateFormat)}
          onClick={handleOpen}
          onBlur={onBlur}
          className={styles.input}
        />

        <button
          type="button"
          ref={triggerRef}
          disabled={disabled}
          onClick={handleOpen}
          className={styles.trigger}
          aria-label={str.select_date}
          aria-expanded={isOpen}
          aria-haspopup="dialog"
        >
          <Calendar size={18} aria-hidden />
        </button>
      </div>

      {isOpen && (
        <Modal id={1} size="sm" onRemove={handleClose} closeOnBackdrop>
          <div
            className={styles.calendar}
            ref={(el) => {
              if (el) handleModalReady()
            }}
          >
            <div className={styles.header}>
              <button
                type="button"
                onClick={handlePrevMonth}
                className={styles.navButton}
                aria-label={str.previous_month}
              >
                <ChevronLeft size={18} aria-hidden />
              </button>

              <span className={styles.monthYear}>
                {str.months[month]} {year}
              </span>

              <button
                type="button"
                onClick={handleNextMonth}
                className={styles.navButton}
                aria-label={str.next_month}
              >
                <ChevronRight size={18} aria-hidden />
              </button>
            </div>

            <div className={styles.weekdays} role="row">
              {str.days_short.map((day) => (
                <span key={day} className={styles.weekday} role="columnheader">
                  {day}
                </span>
              ))}
            </div>

            <div
              ref={gridRef}
              className={styles.grid}
              role="grid"
              aria-label={`${str.months[month]} ${year}`}
            >
              {calendarDays.map((date, index) => {
                if (!date) {
                  return (
                    <span key={`empty-${index}`} className={styles.empty} role="gridcell" />
                  )
                }

                const isDisabled = isDateDisabled(date, minDate, maxDate)
                const isSelected = selected && isSameDay(date, selected)
                const isToday = isSameDay(date, today)

                return (
                  <button
                    key={date.toISOString()}
                    role="gridcell"
                    type="button"
                    data-date={date.toISOString()}
                    data-selected={isSelected}
                    data-today={isToday}
                    disabled={isDisabled}
                    onClick={() => handleSelectDate(date)}
                    onKeyDown={(e) => handleKeyDown(e, date)}
                    className={clsx(
                      styles.day,
                      isSelected && styles.selected,
                      isToday && !isSelected && styles.today
                    )}
                    aria-selected={isSelected || undefined}
                    aria-disabled={isDisabled || undefined}
                    tabIndex={isSelected || (isToday && !selected) ? 0 : -1}
                  >
                    {date.getDate()}
                  </button>
                )
              })}
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}
