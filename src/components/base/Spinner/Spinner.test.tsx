import '@testing-library/jest-dom/vitest'

import { render, screen } from 'utils/Test'
import { describe, expect, it } from 'vitest'
import { Spinner } from './Spinner'

describe('Spinner', () => {
  it('has accessible label', () => {
    render(<Spinner label="Loading data" />)
    expect(screen.getByRole('status')).toHaveAttribute(
      'aria-label',
      'Loading data'
    )
  })
})
