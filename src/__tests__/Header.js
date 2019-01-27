import React from 'react'
import { render } from 'react-testing-library'
import Header from '../components/Header'

describe('Header Test', () => {
  test('Display header title given a string', () => {
    const title = 'Test Title'
    const { getByText } = render(<Header title={title} />)
    getByText(title)
  })
})
