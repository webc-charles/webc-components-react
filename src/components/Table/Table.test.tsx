import '@testing-library/jest-dom/vitest'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFoot,
  TableHead,
  TableHeaderCell,
  TableRow,
} from './Table'

describe('Table', () => {
  it('renders a basic table', () => {
    render(
      <Table data-testid="table">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Alice</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    )

    expect(screen.getByTestId('table')).toBeInTheDocument()
    expect(screen.getByRole('table')).toBeInTheDocument()
    expect(screen.getByRole('columnheader', { name: 'Name' })).toBeInTheDocument()
    expect(screen.getByRole('cell', { name: 'Alice' })).toBeInTheDocument()
  })

  it('renders with caption', () => {
    render(
      <Table>
        <TableCaption>Team members</TableCaption>
        <TableBody>
          <TableRow>
            <TableCell>Alice</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    )

    expect(screen.getByText('Team members')).toBeInTheDocument()
  })

  it('renders with footer', () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Item</TableCell>
          </TableRow>
        </TableBody>
        <TableFoot>
          <TableRow>
            <TableCell>Total</TableCell>
          </TableRow>
        </TableFoot>
      </Table>
    )

    expect(screen.getByText('Total')).toBeInTheDocument()
  })

  it('applies striped class by default', () => {
    render(
      <Table data-testid="table">
        <TableBody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    )

    expect(screen.getByTestId('table').className).toMatch(/striped/)
  })

  it('applies bordered class by default', () => {
    render(
      <Table data-testid="table">
        <TableBody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    )

    expect(screen.getByTestId('table').className).toMatch(/bordered/)
  })

  it('applies hoverable class when prop is true', () => {
    render(
      <Table data-testid="table" hoverable>
        <TableBody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    )

    expect(screen.getByTestId('table').className).toMatch(/hoverable/)
  })

  it('applies compact class when prop is true', () => {
    render(
      <Table data-testid="table" compact>
        <TableBody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    )

    expect(screen.getByTestId('table').className).toMatch(/compact/)
  })

  it('does not apply striped class when striped is false', () => {
    render(
      <Table data-testid="table" striped={false}>
        <TableBody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    )

    expect(screen.getByTestId('table').className).not.toMatch(/striped/)
  })

  it('renders caption at bottom when position is bottom', () => {
    render(
      <Table>
        <TableCaption position="bottom" data-testid="caption">
          Footer caption
        </TableCaption>
        <TableBody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    )

    expect(screen.getByTestId('caption').className).toMatch(/bottom/)
  })

  it('passes custom className to Table', () => {
    render(
      <Table data-testid="table" className="custom-class">
        <TableBody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    )

    expect(screen.getByTestId('table')).toHaveClass('custom-class')
  })
})
