import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  test('renders invoice details from App', () => {
    render(<App />)

    expect(screen.getByText('#Invoice: 123')).toBeInTheDocument()
    expect(screen.getByText('Customer: John Doe')).toBeInTheDocument()
    expect(screen.getByText('Total: $1100.00')).toBeInTheDocument()
  })
})