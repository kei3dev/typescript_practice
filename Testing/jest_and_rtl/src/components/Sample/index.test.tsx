import { render } from '@testing-library/react'

import Sample from '.'

test('renders learn testing library', () => {
  const { getByText } = render(<Sample />)
  expect(getByText('learn testing library')).toBeTruthy()
})
