import React from 'react'
import { render } from '@vtex/test-tools/react'

import Example from '../Example'

test('should render the "Example component" text', () => {
  const { getByText } = render(<Example />)

  expect(getByText(/Example component/)).toBeDefined()
})
