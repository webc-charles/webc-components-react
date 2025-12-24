import '@testing-library/jest-dom/vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { InputDate } from './Date'

describe('InputDate', () => {
  it('renders', () => {
    render(<InputDate data-testid="date" selected={null} onChange={() => {}} />)
    expect(screen.getByTestId('date')).toBeInTheDocument()
  })

  it('displays selected date', () => {
    const selectedDate = new Date('2025-01-15')
    render(<InputDate data-testid="date" selected={selectedDate} onChange={() => {}} />)
    const input = screen.getByTestId('date').querySelector('input') as HTMLInputElement
    expect(input.value).toBe('2025-01-15')
  })

  it('applies disabled state', () => {
    render(<InputDate data-testid="date" selected={null} onChange={() => {}} disabled />)
    expect(screen.getByTestId('date').querySelector('input')).toBeDisabled()
  })

  it('opens calendar when clicking button', () => {
    render(<InputDate data-testid="date" selected={null} onChange={() => {}} />)
    fireEvent.click(screen.getByTestId('date').querySelector('button')!)
    expect(document.querySelector('.react-datepicker')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<InputDate data-testid="date" selected={null} onChange={() => {}} className="custom-class" />)
    expect(screen.getByTestId('date')).toHaveClass('custom-class')
  })
})
