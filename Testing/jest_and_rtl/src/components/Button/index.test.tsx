import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import Button from '.'

test('button has corrent initial color', () => {
  render(<Button />)
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' })
  fireEvent.click(colorButton)
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' })
  expect(colorButton.textContent).toBe('Change to red')
})
