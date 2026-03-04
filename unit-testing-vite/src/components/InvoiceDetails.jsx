import React from 'react'

const InvoiceDetails = ({ invoice }) => {
  const total = invoice.amount * (1 + invoice.taxRate / 100)

  return (
    <div>
      <h2>#Invoice: {invoice.id}</h2>

      <p>Customer: {invoice.customer}</p>

      <p>Amount: ${invoice.amount.toFixed(2)}</p>

      <p>Tax Rate: {invoice.taxRate}%</p>

      <p>Total: ${total.toFixed(2)}</p>

      <p>
        Status:
        <span className={`status ${invoice.status}`}>
          {invoice.status}
        </span>
      </p>

      <p>Due Date: {invoice.dueDate}</p>
    </div>
  )
}

export default InvoiceDetails