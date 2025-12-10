import { useContext, useEffect } from 'react'
import '@testing-library/jest-dom'
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Modals } from './Modals'
import { ModalsContext } from './ModalsContext'

describe('Modals', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    act(() => jest.runOnlyPendingTimers())
    jest.useRealTimers()
  })

  it('renders children', () => {
    render(
      <Modals>
        <div>Child Content</div>
      </Modals>
    )
    expect(screen.getByText('Child Content')).toBeInTheDocument()
  })

  it('adds and displays a modal', async () => {
    const TestComponent = () => {
      const { addModal } = useContext(ModalsContext)!

      useEffect(() => {
        addModal({ title: 'Test Modal', children: <span>Modal Body</span> })
      }, [addModal])
      return null
    }

    render(
      <Modals>
        <TestComponent />
      </Modals>
    )

    await act(async () => {
      jest.advanceTimersByTime(150)
    })

    expect(screen.getByText('Test Modal')).toBeInTheDocument()
    expect(screen.getByText('Modal Body')).toBeInTheDocument()
  })

  it('removes modal when close button is clicked', async () => {
    const TestComponent = () => {
      const { addModal } = useContext(ModalsContext)!
      useEffect(() => {
        addModal({ title: 'Close Test', children: <span>Body</span> })
      }, [addModal])
      return null
    }

    render(
      <Modals>
        <TestComponent />
      </Modals>
    )

    await act(async () => {
      jest.advanceTimersByTime(150)
    })

    const closeButton = screen.getByRole('button', { name: /Close Modal/i })
    expect(closeButton).toBeInTheDocument()

    fireEvent.click(closeButton)

    await act(async () => {
      jest.advanceTimersByTime(300)
    })

    await waitFor(() =>
      expect(screen.queryByText('Close Test')).not.toBeInTheDocument()
    )
  })

  it('traps focus inside modal', async () => {
    let triggerModal: (() => void) | null = null

    const TestComponent = () => {
      const { addModal } = useContext(ModalsContext)!

      triggerModal = () => {
        addModal({
          title: 'Focus Test',
          children: <button>Inner Button</button>,
        })
      }

      return null
    }

    render(
      <div>
        <button>Before Modal</button>

        <Modals>
          <TestComponent />
        </Modals>

        <button>After Modal</button>
      </div>
    )

    const beforeButton = screen.getByText('Before Modal')
    beforeButton.focus()
    expect(beforeButton).toHaveFocus()

    act(() => triggerModal!())

    await act(async () => jest.advanceTimersByTime(200))

    const closeButton = screen.getByRole('button', { name: /Close Modal/i })
    const innerButton = screen.getByText('Inner Button')

    expect(closeButton).toHaveFocus()
    fireEvent.keyDown(document, { key: 'Tab', code: 'Tab' })
    expect(innerButton).toHaveFocus()
    fireEvent.keyDown(document, { key: 'Tab', code: 'Tab' })
    expect(closeButton).toHaveFocus()
    fireEvent.keyDown(document, { key: 'Tab', code: 'Tab', shiftKey: true })
    expect(innerButton).toHaveFocus()

    fireEvent.keyDown(document, { key: 'Escape', code: 'Escape' })
    await act(async () => jest.advanceTimersByTime(200))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
