import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { Checkbox } from './Checkbox'

describe('Checkbox', () => {
  it('renders with label', () => {
    render(<Checkbox checked={false} onChange={() => {}} label="Test Label" />)
    expect(screen.getByText('Test Label')).toBeInTheDocument()
  })

  it('renders in checked state', () => {
    render(<Checkbox checked onChange={() => {}} label="Checked" />)
    const checkbox = screen.getByRole('checkbox', {
      hidden: true,
    }) as HTMLInputElement
    expect(checkbox.checked).toBe(true)
  })

  it('renders in unchecked state', () => {
    render(<Checkbox checked={false} onChange={() => {}} label="Unchecked" />)
    const checkbox = screen.getByRole('checkbox', {
      hidden: true,
    }) as HTMLInputElement
    expect(checkbox.checked).toBe(false)
  })

  it('calls onChange when clicked on label', () => {
    const handleChange = jest.fn()
    render(
      <Checkbox checked={false} onChange={handleChange} label="Click me" />
    )
    const checkbox = screen.getByRole('checkbox', { hidden: true })
    fireEvent.click(checkbox)
    expect(handleChange).toHaveBeenCalled()
    expect(handleChange.mock.calls[0][0]).toBe(true)
  })

  it('calls onChange with false when unchecking', () => {
    const handleChange = jest.fn()
    render(<Checkbox checked onChange={handleChange} label="Uncheck me" />)
    const checkbox = screen.getByRole('checkbox', { hidden: true })
    fireEvent.click(checkbox)
    expect(handleChange).toHaveBeenCalled()
    expect(handleChange.mock.calls[0][0]).toBe(false)
  })

  it('applies disabled state', () => {
    const handleChange = jest.fn()
    render(
      <Checkbox
        checked={false}
        onChange={handleChange}
        disabled
        label="Disabled"
      />
    )
    const checkbox = screen.getByRole('checkbox', { hidden: true })
    expect(checkbox).toBeDisabled()

    fireEvent.click(checkbox)
    expect(handleChange).not.toHaveBeenCalled()
  })

  it('renders without label', () => {
    render(<Checkbox checked={false} onChange={() => {}} />)
    const checkbox = screen.getByRole('checkbox', { hidden: true })
    expect(checkbox).toBeInTheDocument()
  })
})
