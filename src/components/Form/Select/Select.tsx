'use client'

import {
  memo,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react'
import { createPortal } from 'react-dom'
import clsx from 'clsx'
import { str } from 'i18n'
import { ChevronDown, LoaderCircle, X } from 'lucide-react'
import styles from './Select.module.scss'
import type {
  ChoiceClearTypes,
  ChoiceListItemTypes,
  ChoiceListTypes,
  OptionListItemTypes,
  OptionListTypes,
  OptionTypes,
  SelectActionsTypes,
  SelectContextTypes,
  SelectModalTypes,
  SelectPlaceholderTypes,
  SelectRootTypes,
} from './Select.types'
import { SelectContextRoot, useSelectContext } from './SelectContext'

// Shared keyboard navigation handler
const handleKeyboardNavigation = (
  e: React.KeyboardEvent,
  {
    focusedIndex,
    filteredOptions,
    setFocusedIndex,
    toggleOption,
    setIsOpen,
    rootRef,
  }: {
    focusedIndex: number
    filteredOptions: OptionTypes[]
    setFocusedIndex: (index: number) => void
    toggleOption: (option: OptionTypes) => void
    setIsOpen: (open: boolean) => void
    rootRef: React.RefObject<HTMLDivElement | null>
  }
) => {
  switch (e.key) {
    case 'ArrowDown':
      e.preventDefault()
      setFocusedIndex(
        focusedIndex < filteredOptions.length - 1 ? focusedIndex + 1 : 0
      )
      break
    case 'ArrowUp':
      e.preventDefault()
      setFocusedIndex(
        focusedIndex > 0 ? focusedIndex - 1 : filteredOptions.length - 1
      )
      break
    case 'Home':
      e.preventDefault()
      setFocusedIndex(0)
      break
    case 'End':
      e.preventDefault()
      setFocusedIndex(filteredOptions.length - 1)
      break
    case 'Enter':
      e.preventDefault()
      if (filteredOptions[focusedIndex]) {
        toggleOption(filteredOptions[focusedIndex])
      }
      break
    case 'Escape':
      e.preventDefault()
      setIsOpen(false)
      rootRef.current?.focus()
      break
    case 'Tab':
      setIsOpen(false)
      break
  }
}

// SEARCH INPUT
const SelectSearch = memo(() => {
  const {
    searchQuery,
    setSearchQuery,
    controlId,
    searchable,
    placeholder,
    filteredOptions,
    focusedIndex,
    setFocusedIndex,
    toggleOption,
    setIsOpen,
    rootRef,
  } = useSelectContext()
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    handleKeyboardNavigation(e, {
      focusedIndex,
      filteredOptions,
      setFocusedIndex,
      toggleOption,
      setIsOpen,
      rootRef,
    })
  }

  if (!searchable) return null

  return (
    <input
      ref={inputRef}
      type="text"
      role="searchbox"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      onKeyDown={handleKeyDown}
      placeholder={placeholder}
      className={styles.selectSearch}
      aria-label={str.search}
      aria-controls={`${controlId}-listbox`}
      aria-autocomplete="list"
      aria-activedescendant={
        focusedIndex >= 0 ? `${controlId}-option-${focusedIndex}` : undefined
      }
    />
  )
})
SelectSearch.displayName = 'SelectSearch'

// OPTION LIST ITEM
const OptionListItem = memo((props: OptionListItemTypes) => {
  const { option, index, disabled, className } = props
  const { multiple, focusedIndex, value, toggleOption, controlId } =
    useSelectContext()

  const isSelected = value.some((o) => o.value === option.value)
  const isFocused = focusedIndex === index
  const itemRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    if (isFocused && itemRef.current) {
      itemRef.current.scrollIntoView({ block: 'nearest' })
    }
  }, [isFocused])

  const classList = clsx(
    styles.optionListItem,
    isSelected && styles.selected,
    isFocused && styles.focused,
    className
  )

  return (
    <li
      ref={itemRef}
      role="option"
      className={classList}
      id={`${controlId}-option-${index}`}
      aria-selected={isSelected}
      aria-disabled={disabled || undefined}
      onClick={() => !disabled && toggleOption(option)}
    >
      {multiple && (
        <input
          readOnly
          tabIndex={-1}
          type="checkbox"
          aria-hidden="true"
          disabled={disabled}
          checked={isSelected}
        />
      )}
      {option.label}
    </li>
  )
})
OptionListItem.displayName = 'OptionListItem'

// OPTION LIST
const OptionList = memo((props: OptionListTypes) => {
  const { controlId, children, className } = props
  const { multiple } = useSelectContext()

  return (
    <ul
      role="listbox"
      id={`${controlId}-listbox`}
      className={clsx(styles.optionList, className)}
      aria-multiselectable={multiple || undefined}
    >
      {children}
    </ul>
  )
})
OptionList.displayName = 'OptionList'

// CHOICE CLEAR
const ChoiceClear = memo(({ className, ...rest }: ChoiceClearTypes) => {
  const { clearAll, disabled, value } = useSelectContext()

  if (!value.length) return null

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={(e) => {
        e.stopPropagation()
        clearAll()
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.stopPropagation()
        }
      }}
      aria-label={str.clear_all}
      className={clsx(styles.choiceClear, className)}
      {...rest}
    >
      <X size={16} aria-hidden />
    </button>
  )
})
ChoiceClear.displayName = 'ChoiceClear'

// CHOICE LIST
const ChoiceList = memo((props: ChoiceListTypes) => {
  const { className, selectedOptions, children } = props

  if (!selectedOptions.length) return null

  return (
    <ul
      role="list"
      aria-label={str.selected_options}
      className={clsx(styles.choiceList, className)}
    >
      {children}
    </ul>
  )
})
ChoiceList.displayName = 'ChoiceList'

// CHOICE LIST ITEM
const ChoiceListItem = memo(
  ({ option, disabled, onRemove }: ChoiceListItemTypes) => (
    <li className={styles.choiceListItem}>
      <span className={styles.choiceListItemLabel}>{option.label}</span>
      <button
        type="button"
        disabled={disabled}
        onClick={(e) => {
          e.stopPropagation()
          if (!disabled) onRemove(option)
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.stopPropagation()
          }
        }}
        aria-label={`${str.remove} ${option.label}`}
        className={styles.choiceListItemRemove}
      >
        <X size={16} aria-hidden />
      </button>
    </li>
  )
)
ChoiceListItem.displayName = 'ChoiceListItem'

// SELECT MODAL
const SelectModal = memo(({ children, className }: SelectModalTypes) => {
  const {
    isOpen,
    menuPosition,
    menuRef,
    controlId,
    onLoadMore,
    hasMore,
    loading,
    searchable,
    setIsOpen,
    rootRef,
  } = useSelectContext()

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (!onLoadMore || !hasMore || loading) return

    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget
    const nearBottom = scrollTop + clientHeight >= scrollHeight - 50

    if (nearBottom) onLoadMore()
  }

  // Focus trap for non-searchable
  useEffect(() => {
    if (!isOpen || searchable) return

    const handleTab = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        e.preventDefault()
        setIsOpen(false)
        rootRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleTab)
    return () => document.removeEventListener('keydown', handleTab)
  }, [isOpen, searchable, setIsOpen, rootRef])

  if (!isOpen) return null

  return createPortal(
    <div
      ref={menuRef}
      id={controlId}
      onScroll={handleScroll}
      aria-busy={loading || undefined}
      className={clsx(styles.selectModal, className)}
      style={{
        top: `${menuPosition.top}px`,
        left: `${menuPosition.left}px`,
        width: `${menuPosition.width}px`,
      }}
    >
      <SelectSearch />
      {children}

      {loading && (
        <div className={styles.selectLoading}>
          <LoaderCircle
            size={18}
            aria-hidden
            className={styles.selectSpinner}
          />
        </div>
      )}
    </div>,
    document.body
  )
})
SelectModal.displayName = 'SelectModal'

// SELECT ACTIONS
const SelectActions = memo(({ children, className, ...rest }: SelectActionsTypes) => (
  <div className={clsx(styles.selectActions, className)} {...rest}>{children}</div>
))
SelectActions.displayName = 'SelectActions'

// SELECT TRIGGER
const SelectTrigger = memo(() => {
  const { isOpen } = useSelectContext()

  return (
    <span
      aria-hidden="true"
      className={clsx(styles.selectTrigger, isOpen && styles.open)}
    >
      <ChevronDown size={21} />
    </span>
  )
})
SelectTrigger.displayName = 'SelectTrigger'

// SELECT PLACEHOLDER
const SelectPlaceholder = memo(({ className, ...rest }: SelectPlaceholderTypes) => {
  const { placeholder, value, multiple } = useSelectContext()

  // Single select: show selected label
  if (!multiple && value.length) {
    return (
      <span className={clsx(styles.selectValue, className)} {...rest}>
        {value[0].label}
      </span>
    )
  }

  // Multi select: hide when has selections
  if (multiple && value.length) return null

  return (
    <span className={clsx(styles.selectPlaceholder, className)} {...rest}>
      {placeholder}
    </span>
  )
})
SelectPlaceholder.displayName = 'SelectPlaceholder'

// SELECT ROOT
const SelectRoot = (props: SelectRootTypes) => {
  const {
    options,
    value,
    onChange,
    disabled,
    className,
    children,
    label,
    labelClassName,
    placeholder = str.select_option,
    flip = true,
    multiple = false,
    searchable = false,
    searchDebounce = 300,
    onSearch,
    onLoadMore,
    hasMore,
    loading,
    ...restProps
  } = props

  const [isOpen, setIsOpenState] = useState(false)
  const [focusedIndex, setFocusedIndex] = useState(0)
  const [searchQuery, setSearchQueryState] = useState('')
  const [menuPosition, setMenuPosition] = useState({
    top: 0,
    left: 0,
    width: 0,
    flip,
  })
  const rootRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const controlId = useId()

  const filteredOptions = useMemo(() => {
    if (!searchable || !searchQuery || onSearch) {
      return options
    }
    const query = searchQuery.toLowerCase()
    return options.filter((opt) => opt.label.toLowerCase().includes(query))
  }, [options, searchQuery, searchable, onSearch])

  const setIsOpen = useCallback((open: boolean) => {
    setIsOpenState(open)
    if (!open) {
      requestAnimationFrame(() => rootRef.current?.focus())
    }
  }, [])

  const setSearchQuery = useCallback(
    (query: string) => {
      setSearchQueryState(query)
      setFocusedIndex(0)

      if (onSearch) {
        if (searchTimeoutRef.current) {
          clearTimeout(searchTimeoutRef.current)
        }
        searchTimeoutRef.current = setTimeout(() => {
          onSearch(query)
        }, searchDebounce)
      }
    },
    [onSearch, searchDebounce]
  )

  useEffect(() => {
    if (!isOpen) {
      setSearchQueryState('')
      setFocusedIndex(0)
    }
  }, [isOpen])

  useEffect(() => {
    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current)
      }
    }
  }, [])

  const updateMenuPosition = useCallback(() => {
    if (!rootRef.current || !isOpen) return

    const rect = rootRef.current.getBoundingClientRect()
    const menuHeight = menuRef.current?.getBoundingClientRect().height || 250

    let shouldFlip = false
    if (flip) {
      const spaceBelow = window.innerHeight - rect.bottom
      shouldFlip = spaceBelow < menuHeight && rect.top > spaceBelow
    }

    setMenuPosition({
      top: shouldFlip ? rect.top - menuHeight - 4 : rect.bottom + 4,
      left: rect.left,
      width: rect.width,
      flip: shouldFlip,
    })
  }, [isOpen, flip])

  useEffect(() => {
    if (!isOpen) return

    updateMenuPosition()
    window.addEventListener('scroll', updateMenuPosition, true)
    window.addEventListener('resize', updateMenuPosition)

    return () => {
      window.removeEventListener('scroll', updateMenuPosition, true)
      window.removeEventListener('resize', updateMenuPosition)
    }
  }, [isOpen, updateMenuPosition])

  // Click outside to close
  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node
      if (
        !rootRef.current?.contains(target) &&
        !menuRef.current?.contains(target)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen, setIsOpen])

  const toggleOption = useCallback(
    (option: OptionTypes) => {
      if (disabled) return

      if (multiple) {
        const exists = value.some((v) => v.value === option.value)
        const newValue = exists
          ? value.filter((v) => v.value !== option.value)
          : [...value, option]
        onChange(newValue)
        if (isOpen) requestAnimationFrame(updateMenuPosition)
      } else {
        onChange([option])
        setIsOpen(false)
      }
    },
    [disabled, isOpen, multiple, onChange, setIsOpen, value, updateMenuPosition]
  )

  const clearAll = useCallback(() => {
    if (disabled) return
    onChange([])
    if (isOpen) requestAnimationFrame(updateMenuPosition)
  }, [disabled, isOpen, onChange, updateMenuPosition])

  const handleRootClick = useCallback(() => {
    if (disabled) return
    setIsOpenState((prev) => !prev)
  }, [disabled])

  const handleRootKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (disabled) return

      // Open on Enter/Space/Arrow when closed
      if (!isOpen) {
        if (['Enter', ' ', 'ArrowDown', 'ArrowUp'].includes(e.key)) {
          e.preventDefault()
          setIsOpenState(true)
        }
        return
      }

      // When open and searchable, let search input handle keys
      if (searchable) {
        // Only handle Escape at root level
        if (e.key === 'Escape') {
          e.preventDefault()
          setIsOpenState(false)
        }
        return
      }

      // Non-searchable: handle navigation at root
      handleKeyboardNavigation(e, {
        focusedIndex,
        filteredOptions,
        setFocusedIndex,
        toggleOption,
        setIsOpen,
        rootRef,
      })
    },
    [
      disabled,
      isOpen,
      searchable,
      focusedIndex,
      filteredOptions,
      toggleOption,
      setIsOpen,
    ]
  )

  const contextValue = useMemo<SelectContextTypes>(
    () => ({
      isOpen,
      setIsOpen,
      menuPosition,
      rootRef,
      menuRef,
      controlId,
      value,
      options,
      filteredOptions,
      focusedIndex,
      setFocusedIndex,
      toggleOption,
      clearAll,
      updateMenuPosition,
      disabled,
      placeholder,
      multiple,
      searchable,
      searchQuery,
      setSearchQuery,
      onLoadMore,
      hasMore,
      loading,
    }),
    [
      isOpen,
      setIsOpen,
      menuPosition,
      controlId,
      value,
      options,
      filteredOptions,
      focusedIndex,
      toggleOption,
      clearAll,
      updateMenuPosition,
      disabled,
      placeholder,
      multiple,
      searchable,
      searchQuery,
      setSearchQuery,
      onLoadMore,
      hasMore,
      loading,
    ]
  )

  const activeDescendant =
    isOpen && !searchable && focusedIndex >= 0
      ? `${controlId}-option-${focusedIndex}`
      : undefined

  const accessibleValue = value.length
    ? value.map((v) => v.label).join(', ')
    : placeholder

  const selectElement = (
    <div
      ref={rootRef}
      id={controlId}
      role="combobox"
      tabIndex={disabled ? -1 : 0}
      aria-expanded={isOpen}
      aria-haspopup="listbox"
      aria-controls={isOpen ? `${controlId}-listbox` : undefined}
      aria-activedescendant={activeDescendant}
      aria-disabled={disabled || undefined}
      aria-labelledby={label ? `${controlId}-label` : undefined}
      aria-label={label ? undefined : accessibleValue}
      onClick={handleRootClick}
      onKeyDown={handleRootKeyDown}
      className={clsx(
        styles.selectRoot,
        disabled && styles.disabled,
        className
      )}
      {...restProps}
    >
      {children}
    </div>
  )

  if (label) {
    return (
      <SelectContextRoot value={contextValue}>
        <div className={styles.wrapper}>
          <label
            htmlFor={controlId}
            id={`${controlId}-label`}
            className={clsx(styles.label, labelClassName)}
          >
            {label}
          </label>
          {selectElement}
        </div>
      </SelectContextRoot>
    )
  }

  return (
    <SelectContextRoot value={contextValue}>{selectElement}</SelectContextRoot>
  )
}

export {
  ChoiceClear,
  ChoiceList,
  ChoiceListItem,
  OptionList,
  OptionListItem,
  SelectActions,
  SelectModal,
  SelectPlaceholder,
  SelectRoot,
  SelectSearch,
  SelectTrigger,
}
