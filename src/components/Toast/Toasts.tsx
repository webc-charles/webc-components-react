import { ReactNode, useCallback, useMemo, useState } from 'react'
import { Toast } from './Toast'
import styles from './Toast.module.scss'
import { ToastsContext } from './ToastsContext'
import { ToastConfigTypes } from './types'

export function Toasts({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastConfigTypes[]>([])

  const addToast = useCallback((options: ToastConfigTypes) => {
    setTimeout(() => {
      setToasts((prev) => [...prev, { ...options, id: Date.now() }])
    }, 1000)
  }, [])

  const removeToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((v) => id !== v.id))
  }, [])

  const value = useMemo(
    () => ({ toasts, addToast, removeToast }),
    [toasts, addToast, removeToast]
  )

  return (
    <ToastsContext.Provider value={value}>
      {children}

      <div className={styles.toasts}>
        {toasts.map((toast) => (
          <Toast {...toast} key={toast.id} onRemove={removeToast} />
        ))}
      </div>
    </ToastsContext.Provider>
  )
}
