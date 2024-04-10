import { it, describe, expect, beforeAll } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import Header from '@/components/Header'

beforeAll(() => {
  // Render the Header component with the appropriate props
  render(<Header favoritesCount={0} />)
})

describe('Header_function', () => {
  // Tests that Header renders without errors
  it('renders without errors', () => {
  })

  // Tests that Header displays the correct links
  it('displays the correct links', () => {
  // Find all link elements by their role
    const links = screen.getAllByRole('link')

    // Assert the href attribute of the first link
    expect(links[0]).toHaveAttribute('href', '/')

    // Assert the href attribute of the second link
    expect(links[1]).toHaveAttribute('href', '/favorites/page')
  })
})
