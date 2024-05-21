import AgeLessThan from './AgeLessThan'

describe('AgeLessThan', () => {
  test('.isSatisfiedBy()', () => {
    const specification = new AgeLessThan(30)

    const customer = {
      age: 29,
      cpf: '275.484.389-23',
      name: 'Vuxaywua Zukiagou',
      income: 3000.00,
      location: 'SP',
    }

    expect(specification.isSatisfiedBy(customer)).toBe(true)

    customer.age = 30

    expect(specification.isSatisfiedBy(customer)).toBe(false)
  })
})
