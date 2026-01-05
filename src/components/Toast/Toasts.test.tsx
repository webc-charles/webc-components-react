import { useContext, useEffect } from 'react'
import '@testing-library/jest-dom/vitest'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { ToastHeader, ToastBody } from './Toast'
import { Toasts } from './Toasts'
import { ToastsContext } from './ToastsContext'

describe('Toasts', () => {
  beforeEach(() => vi.useFakeTimers())
  afterEach(() => {
    act(() => vi.runOnlyPendingTimers())
    vi.useRealTimers()
  })

  it('adds and displays a toast', async () => {
    const TestComponent = () => {
      const { addToast } = useContext(ToastsContext)!
      useEffect(() => {
        addToast({
          children: (
            <>
              <ToastHeader>Toast Title</ToastHeader>
              <ToastBody data-testid="toast-body">Toast Body</ToastBody>
            </>
          ),
        })
      }, [addToast])
      return null
    }

    render(<Toasts><TestComponent /></Toasts>)
    await act(async () => vi.advanceTimersByTime(1000))

    const toast = document.querySelector('[role="status"]')
    expect(toast).toBeInTheDocument()
    expect(toast).toHaveTextContent('Toast Title')
    expect(screen.getByTestId('toast-body')).toBeInTheDocument()
  })

  it('removes toast when close button is clicked', async () => {
    const TestComponent = () => {
      const { addToast } = useContext(ToastsContext)!
      useEffect(() => {
        addToast({
          children: (
            <>
              <ToastHeader>Close Test</ToastHeader>
              <ToastBody>Body</ToastBody>
            </>
          ),
        })
      }, [addToast])
      return null
    }

    render(<Toasts><TestComponent /></Toasts>)
    await act(async () => vi.advanceTimersByTime(1000))

    const toast = document.querySelector('[role="status"]')
    const closeButton = toast?.querySelector('button')
    fireEvent.click(closeButton!)
    await act(async () => vi.advanceTimersByTime(1500))

    expect(document.querySelector('[role="status"]')).not.toBeInTheDocument()
  })
})
