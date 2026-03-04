import React from 'react'
import InvoiceDetails from './components/InvoiceDetails'

const App = () => {
  const invoice = {
    id: 123,
    customer: 'John Doe',
    amount: 1000,
    taxRate: 10,
    status: 'paid',
    dueDate: '2024-12-31',
  }

  return (
    <div>
      <InvoiceDetails invoice={invoice} />
    </div>
  )
}

export default App