import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Checkbox from '.'

test('checkbox exists', () => {
  render(<Checkbox />)
  const checkbox = screen.getByRole('checkbox')
  expect(checkbox).not.toBeChecked()
})
