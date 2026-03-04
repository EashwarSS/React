import { describe, it, expect } from 'vitest'
import { calculateTotal } from './calculateTotal'

describe('calculateTotal', () => {

  it('calculates total with tax correctly', () => {
    expect(calculateTotal(1000, 0.1)).toBeCloseTo(1100)
    expect(calculateTotal(500, 0.2)).toBeCloseTo(600)
    expect(calculateTotal(200, 0.05)).toBeCloseTo(210)
  })

  it('handles zero tax rate', () => {
    expect(calculateTotal(1000, 0)).toBeCloseTo(1000)
  })

  it('handles negative tax rate', () => {
    expect(calculateTotal(1000, -0.1)).toBeCloseTo(900)
  })

})