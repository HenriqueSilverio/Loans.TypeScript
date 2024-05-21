import IncomeGreaterThanOrEqual from './IncomeGreaterThanOrEqual'

describe('IncomeGreaterThanOrEqual', () => {
  test('.isSatisfiedBy()', () => {
    const specification = new IncomeGreaterThanOrEqual(3000.00)

    const customer = {
      age: 29,
      cpf: '275.484.389-23',
      name: 'Vuxaywua Zukiagou',
      income: 3000.00,
      location: 'SP',
    }

    expect(specification.isSatisfiedBy(customer)).toBe(true)

    customer.income = 3800.00

    expect(specification.isSatisfiedBy(customer)).toBe(true)

    customer.income = 2400.00

    expect(specification.isSatisfiedBy(customer)).toBe(false)
  })
})
