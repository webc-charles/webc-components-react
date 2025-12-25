'use client'

import { createContext, useContext, useState } from 'react'
import clsx from 'clsx'
import { Button } from 'components'
import styles from './Tab.module.scss'
import {
  TabButtonTypes,
  TabContextValue,
  TabListTypes,
  TabPanelTypes,
  TabPanelsTypes,
  TabTypes,
} from './Tab.types'

const TabContext = createContext<TabContextValue | null>(null)

function useTabContext() {
  const context = useContext(TabContext)
  if (!context) {
    throw new Error('Tab components must be used within a <Tab> provider')
  }
  return context
}

export function Tab({
  defaultValue,
  value,
  onValueChange,
  className,
  children,
  ...props
}: TabTypes) {
  const [internalValue, setInternalValue] = useState(defaultValue)

  const activeTab = value ?? internalValue
  const setActiveTab = (newValue: string) => {
    setInternalValue(newValue)
    onValueChange?.(newValue)
  }

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={clsx(styles.tab, className)} {...props}>
        {children}
      </div>
    </TabContext.Provider>
  )
}

export function TabList({ className, children, ...props }: TabListTypes) {
  return (
    <div className={clsx(styles.tabList, className)} role="tablist" {...props}>
      {children}
    </div>
  )
}

export function TabButton({
  value,
  children,
  className,
  appearance,
  variant = 'default',
  ...props
}: TabButtonTypes) {
  const { activeTab, setActiveTab } = useTabContext()
  const isActive = activeTab === value

  return (
    <Button
      role="tab"
      variant={variant}
      appearance={appearance}
      aria-selected={isActive}
      onClick={() => setActiveTab(value)}
      className={clsx(styles.tabButton, className)}
      {...props}
    >
      {children}
    </Button>
  )
}

export function TabPanels({ className, children, ...props }: TabPanelsTypes) {
  return (
    <div className={clsx(styles.tabPanels, className)} {...props}>
      {children}
    </div>
  )
}

export function TabPanel({
  value,
  className,
  children,
  ...props
}: TabPanelTypes) {
  const { activeTab } = useTabContext()

  if (activeTab !== value) {
    return null
  }

  return (
    <div
      role="tabpanel"
      className={clsx(styles.tabPanel, className)}
      {...props}
    >
      {children}
    </div>
  )
}
