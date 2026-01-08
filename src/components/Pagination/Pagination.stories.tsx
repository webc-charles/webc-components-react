import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Pagination } from './Pagination'

const meta: Meta<typeof Pagination> = {
  title: 'Pagination',
  component: Pagination,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Pagination>

export const Default: Story = {
  args: {
    currentPage: 5,
    totalPages: 10,
  },
}

export const FirstPage: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
  },
}

export const LastPage: Story = {
  args: {
    currentPage: 10,
    totalPages: 10,
  },
}

export const FewPages: Story = {
  args: {
    currentPage: 2,
    totalPages: 5,
  },
}

export const ManyPages: Story = {
  args: {
    currentPage: 25,
    totalPages: 50,
  },
}

export const WithFirstLast: Story = {
  args: {
    currentPage: 10,
    totalPages: 20,
    showFirstLast: true,
  },
}

export const WithoutPrevNext: Story = {
  args: {
    currentPage: 5,
    totalPages: 10,
    showPrevNext: false,
  },
}

export const MoreSiblings: Story = {
  args: {
    currentPage: 10,
    totalPages: 20,
    siblingCount: 2,
  },
}

export const Disabled: Story = {
  args: {
    currentPage: 5,
    totalPages: 10,
    disabled: true,
  },
}

function InteractiveExample() {
  const [page, setPage] = useState(1)
  const totalPages = 15

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <p>Page actuelle : {page}</p>
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
        showFirstLast
      />
    </div>
  )
}

export const Interactive: Story = {
  render: () => <InteractiveExample />,
}

export const CustomHref: Story = {
  args: {
    currentPage: 5,
    totalPages: 10,
    getPageHref: (page) => `/articles?page=${page}`,
  },
}
