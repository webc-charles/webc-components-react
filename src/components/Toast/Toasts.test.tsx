import { useContext, useEffect } from 'react'
import '@testing-library/jest-dom'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { Toasts } from './Toasts'
import { ToastsContext } from './ToastsContext'

describe('Toasts', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    act(() => jest.runOnlyPendingTimers())
    jest.useRealTimers()
  })

  it('adds and displays a toast', async () => {
    const TestComponent = () => {
      const { addToast } = useContext(ToastsContext)!

      useEffect(() => {
        addToast({ title: 'Toast Title', children: <span>Toast Body</span> })
      }, [addToast])

      return null
    }

    render(
      <Toasts>
        <TestComponent />
      </Toasts>
    )

    await act(async () => {
      jest.advanceTimersByTime(1000)
    })

    expect(screen.getByText('Toast Title')).toBeInTheDocument()
    expect(screen.getByText('Toast Body')).toBeInTheDocument()
  })

  it('removes toast when close button is clicked', async () => {
    const TestComponent = () => {
      const { addToast } = useContext(ToastsContext)!

      useEffect(() => {
        addToast({ title: 'Close Test', children: <span>Body</span> })
      }, [addToast])

      return null
    }

    render(
      <Toasts>
        <TestComponent />
      </Toasts>
    )

    await act(async () => {
      jest.advanceTimersByTime(1000)
    })

    const closeButton = screen.getByRole('button', { name: /Close Toast/i })
    expect(closeButton).toBeInTheDocument()

    fireEvent.click(closeButton)

    await act(async () => {
      jest.advanceTimersByTime(1500)
    })

    expect(screen.queryByText('Close Test')).not.toBeInTheDocument()
  })
})
