import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { InputNumber } from './Number'

describe('InputNumber', () => {
  it('renders with label', () => {
    render(<InputNumber value={5} onChange={() => {}} label="Quantity" />)
    expect(screen.getByText('Quantity')).toBeInTheDocument()
  })

  it('displays current value', () => {
    render(<InputNumber value={10} onChange={() => {}} />)
    const input = screen.getByRole('spinbutton') as HTMLInputElement
    expect(input.value).toBe('10')
  })

  it('calls onChange when typing in input', () => {
    const handleChange = jest.fn()
    render(<InputNumber value={0} onChange={handleChange} />)
    const input = screen.getByRole('spinbutton')
    fireEvent.change(input, { target: { value: '15' } })
    expect(handleChange).toHaveBeenCalledWith(15)
  })

  it('increments value when increment button clicked', () => {
    const handleChange = jest.fn()
    render(<InputNumber value={5} onChange={handleChange} />)
    const buttons = screen.getAllByRole('button')
    const incrementBtn = buttons[0]
    fireEvent.click(incrementBtn)
    expect(handleChange).toHaveBeenCalledWith(6)
  })

  it('decrements value when decrement button clicked', () => {
    const handleChange = jest.fn()
    render(<InputNumber value={5} onChange={handleChange} />)
    const buttons = screen.getAllByRole('button')
    const decrementBtn = buttons[1]
    fireEvent.click(decrementBtn)
    expect(handleChange).toHaveBeenCalledWith(4)
  })

  it('respects minimum value', () => {
    const handleChange = jest.fn()
    render(<InputNumber value={3} onChange={handleChange} min={3} />)
    const buttons = screen.getAllByRole('button')
    const decrementBtn = buttons[1]
    fireEvent.click(decrementBtn)
    expect(handleChange).not.toHaveBeenCalled()
  })

  it('respects maximum value', () => {
    const handleChange = jest.fn()
    render(<InputNumber value={10} onChange={handleChange} max={10} />)
    const buttons = screen.getAllByRole('button')
    const incrementBtn = buttons[0]
    fireEvent.click(incrementBtn)
    expect(handleChange).not.toHaveBeenCalled()
  })

  it('applies disabled state to input and buttons', () => {
    render(<InputNumber value={5} onChange={() => {}} disabled />)
    const input = screen.getByRole('spinbutton')
    const buttons = screen.getAllByRole('button')

    expect(input).toBeDisabled()
    buttons.forEach((btn) => expect(btn).toBeDisabled())
  })
})
