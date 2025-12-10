import '@testing-library/jest-dom'
import { fireEvent, render, screen, within } from '@testing-library/react'
import { InputDate } from './Date'

describe('InputDate', () => {
  it('displays selected date in accessible format', () => {
    const selectedDate = new Date('2025-01-15')
    render(<InputDate selected={selectedDate} onChange={() => {}} />)
    const input = screen.getByRole('textbox') as HTMLInputElement
    expect(input.value).toBe('2025-01-15')
  })

  it('display disabled state', () => {
    render(<InputDate selected={null} onChange={() => {}} disabled />)
    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled()
  })

  it('opens calendar dialog when clicking button', () => {
    const handleChange = jest.fn()
    render(
      <InputDate selected={null} onChange={handleChange} title="select date" />
    )

    const button = screen.getByRole('button', { name: /select date/i })
    fireEvent.click(button)

    const calendar = screen.getByRole('dialog', { hidden: true })
    expect(calendar).toBeInTheDocument()
  })

  it('allows selecting date from calendar with mouse', () => {
    const handleChange = jest.fn()
    render(
      <InputDate selected={null} onChange={handleChange} title="select date" />
    )

    const button = screen.getByRole('button', { name: /select date/i })
    fireEvent.click(button)

    const calendar = screen.getByRole('dialog', { hidden: true })
    const dayButton = within(calendar).getByText('15')
    fireEvent.click(dayButton)

    expect(handleChange).toHaveBeenCalled()
    const calledDate = handleChange.mock.calls[0][0]
    expect(calledDate instanceof Date).toBe(true)
    expect(calledDate.getDate()).toBe(15)
  })

  it('respects minimum date constraint', () => {
    const minDate = new Date('2025-01-01')
    render(<InputDate selected={null} onChange={() => {}} minDate={minDate} />)

    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
  })

  it('respects maximum date constraint', () => {
    const maxDate = new Date('2025-12-31')
    render(<InputDate selected={null} onChange={() => {}} maxDate={maxDate} />)

    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
  })

  it('opens calendar and selects a date', async () => {
    const handleChange = jest.fn()

    render(
      <InputDate
        selected={new Date('2025-01-01')}
        onChange={handleChange}
        title="Select date"
      />
    )

    const button = screen.getByRole('button', { name: /select date/i })
    fireEvent.click(button)

    const calendar = await screen.findByRole('dialog', { name: /choose date/i })
    expect(calendar).toBeInTheDocument()

    const dayButton = await within(calendar).findByText('15')
    fireEvent.click(dayButton)

    expect(handleChange).toHaveBeenCalledTimes(1)
    const calledDate = handleChange.mock.calls[0][0]
    expect(calledDate).toBeInstanceOf(Date)
    expect(calledDate.getDate()).toBe(15)
  })
})
