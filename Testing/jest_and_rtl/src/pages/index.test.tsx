import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import HomePage from '.'

test('renders Home Page', () => {
  render(<HomePage />)
  const textElement = screen.getByText(/home page/i)
  expect(textElement).toBeInTheDocument()
})
