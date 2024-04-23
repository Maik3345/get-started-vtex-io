/* eslint-env jest */
import React from 'react'
import { render } from '@vtex/test-tools/react'

import Example from '../Example'

test('should render the "Example component" text', () => {
  const props = {
    text: 'Example component',
  }

  const { getByText } = render(<Example {...props} />)

  expect(getByText(/Example component/)).toBeDefined()
})
