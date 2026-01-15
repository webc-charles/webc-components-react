import '@testing-library/jest-dom/vitest'

import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Skeleton } from './Skeleton'

describe('Skeleton', () => {
  it('renders with default props', () => {
    render(<Skeleton data-testid="skeleton" />)
    expect(screen.getByTestId('skeleton')).toBeInTheDocument()
  })

  it('applies text variant by default', () => {
    render(<Skeleton data-testid="skeleton" />)
    expect(screen.getByTestId('skeleton').className).toMatch(/text/)
  })

  it('applies circle variant', () => {
    render(<Skeleton variant="circle" data-testid="skeleton" />)
    expect(screen.getByTestId('skeleton').className).toMatch(/circle/)
  })

  it('applies rect variant', () => {
    render(<Skeleton variant="rect" data-testid="skeleton" />)
    expect(screen.getByTestId('skeleton').className).toMatch(/rect/)
  })

  it('applies custom width as number', () => {
    render(<Skeleton width={200} data-testid="skeleton" />)
    expect(screen.getByTestId('skeleton')).toHaveStyle({ width: '200px' })
  })

  it('applies custom width as string', () => {
    render(<Skeleton width="50%" data-testid="skeleton" />)
    expect(screen.getByTestId('skeleton')).toHaveStyle({ width: '50%' })
  })

  it('applies custom height', () => {
    render(<Skeleton height={100} data-testid="skeleton" />)
    expect(screen.getByTestId('skeleton')).toHaveStyle({ height: '100px' })
  })

  it('applies custom borderRadius', () => {
    render(
      <Skeleton variant="rect" borderRadius={8} data-testid="skeleton" />
    )
    expect(screen.getByTestId('skeleton')).toHaveStyle({
      borderRadius: '8px',
    })
  })

  it('has animation by default', () => {
    render(<Skeleton data-testid="skeleton" />)
    expect(screen.getByTestId('skeleton').className).toMatch(/animated/)
  })

  it('can disable animation', () => {
    render(<Skeleton animation={false} data-testid="skeleton" />)
    expect(screen.getByTestId('skeleton').className).not.toMatch(
      /animated/
    )
  })

  it('forwards ref', () => {
    const ref = { current: null }
    render(<Skeleton ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('merges custom className', () => {
    render(<Skeleton className="custom-class" data-testid="skeleton" />)
    expect(screen.getByTestId('skeleton')).toHaveClass('custom-class')
  })

  it('merges custom style', () => {
    render(<Skeleton style={{ margin: '10px' }} data-testid="skeleton" />)
    expect(screen.getByTestId('skeleton')).toHaveStyle({ margin: '10px' })
  })
})
