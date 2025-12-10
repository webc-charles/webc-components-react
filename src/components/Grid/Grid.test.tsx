import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Grid } from './Grid'
import { GridItem } from './GridItem'

describe('Grid', () => {
  it('renders Grid with children', () => {
    render(
      <Grid>
        <div>Item 1</div>
        <div>Item 2</div>
      </Grid>
    )
    expect(screen.getByText('Item 1')).toBeInTheDocument()
    expect(screen.getByText('Item 2')).toBeInTheDocument()
  })

  it('renders Grid with custom className', () => {
    render(
      <Grid className="custom-grid" data-testid="grid">
        <div>Content</div>
      </Grid>
    )
    expect(screen.getByTestId('grid')).toHaveClass('custom-grid')
  })

  it('renders Grid with column classes', () => {
    render(
      <Grid col={3} colMD={6} data-testid="grid">
        <div>Content</div>
      </Grid>
    )
    expect(screen.getByTestId('grid')).toHaveClass('grid')
  })

  it('renders Grid with gap classes', () => {
    render(
      <Grid gap="lg" data-testid="grid">
        <div>Content</div>
      </Grid>
    )
    expect(screen.getByTestId('grid')).toHaveClass('grid')
  })
})

describe('GridItem', () => {
  it('renders GridItem with children', () => {
    render(
      <GridItem>
        <div>Item Content</div>
      </GridItem>
    )
    expect(screen.getByText('Item Content')).toBeInTheDocument()
  })

  it('renders GridItem with custom className', () => {
    render(
      <GridItem className="custom-item" data-testid="item">
        <div>Content</div>
      </GridItem>
    )
    expect(screen.getByTestId('item')).toHaveClass('custom-item')
  })

  it('renders GridItem with column span', () => {
    render(
      <GridItem col={2} data-testid="item">
        <div>Content</div>
      </GridItem>
    )
    expect(screen.getByTestId('item')).toHaveClass('gridItem')
  })

  it('renders GridItem with row span', () => {
    render(
      <GridItem row={2} data-testid="item">
        <div>Content</div>
      </GridItem>
    )
    expect(screen.getByTestId('item')).toHaveClass('gridItem')
  })

  it('renders GridItem with responsive column spans', () => {
    render(
      <GridItem col={1} colMD={2} colLG={3} data-testid="item">
        <div>Content</div>
      </GridItem>
    )
    expect(screen.getByTestId('item')).toHaveClass('gridItem')
  })
})
