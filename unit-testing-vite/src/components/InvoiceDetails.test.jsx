import { render, screen } from '@testing-library/react'
import InvoiceDetails from './InvoiceDetails'

describe('InvoiceDetails', () => {
  const mockInvoice = {
    id: 123,
    customer: 'John Doe',
    amount: 1000,
    taxRate: 10,
    status: 'paid',
    dueDate: '2024-12-31',
  }

  test('renders invoice details correctly', () => {
    render(<InvoiceDetails invoice={mockInvoice} />)

    expect(screen.getByText(/#Invoice:/i)).toBeInTheDocument()
    expect(screen.getByText(/Customer: John Doe/i)).toBeInTheDocument()
    expect(screen.getByText(/Amount: \$1000\.00/i)).toBeInTheDocument()
    expect(screen.getByText(/Tax Rate: 10%/i)).toBeInTheDocument()
    expect(screen.getByText(/Total: \$1100\.00/i)).toBeInTheDocument()
    expect(screen.getByText(/paid/i)).toBeInTheDocument()
    expect(screen.getByText(/Due Date: 2024-12-31/i)).toBeInTheDocument()
  })
})