import { useEffect, useRef, useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import { Button } from 'components/Button'
import styles from './Date.module.scss'
import { InputDateTypes } from './types'

export function InputDate({
  selected,
  onChange,
  onBlur,
  placeholder = 'Select date',
  dateFormat = 'yyyy-MM-dd',
  minDate,
  maxDate,
  disabled = false,
  className,
  title,
}: InputDateTypes) {
  const [isOpen, setIsOpen] = useState(false)

  const wasOpenRef = useRef(false)
  const triggerButtonRef = useRef<HTMLButtonElement | null>(null)

  const handleChange = (date: Date | null) => {
    onChange(date)
    setIsOpen(false)
  }

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      e.key === 'Escape' && setIsOpen(false)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [])

  useEffect(() => {
    if (!isOpen) {
      if (wasOpenRef.current) {
        const triggerButton = triggerButtonRef?.current
        setTimeout(() => triggerButton?.focus())
      }
      wasOpenRef.current = false
      return
    }

    wasOpenRef.current = true

    const selectedDay: HTMLElement | null = document.querySelector(
      '.react-datepicker__day--selected'
    )

    const todayDay: HTMLElement | null = document.querySelector(
      '.react-datepicker__day--today'
    )

    selectedDay?.focus() || todayDay?.focus()
  }, [isOpen])

  return (
    <div className={clsx(styles.datePickerWrapper, className)}>
      <ReactDatePicker
        selected={selected}
        onChange={handleChange}
        dateFormat={dateFormat}
        placeholderText={placeholder}
        minDate={minDate}
        maxDate={maxDate}
        disabled={disabled}
        className={styles.datePickerInput}
        wrapperClassName={styles.datePickerContainer}
        calendarClassName={styles.calendar}
        title={title}
        open={isOpen}
        onClickOutside={() => setIsOpen(false)}
        onCalendarClose={() => setIsOpen(false)}
      />

      <Button
        type="button"
        ref={triggerButtonRef}
        action={() => setIsOpen(true)}
        className={clsx(styles.datePickerTrigger, isOpen ? styles.focused : '')}
      >
        <span className="hide">{title}</span>

        <FontAwesomeIcon
          icon={faCalendar}
          className={styles.calendarIcon}
          aria-hidden={true}
        />
      </Button>
    </div>
  )
}
