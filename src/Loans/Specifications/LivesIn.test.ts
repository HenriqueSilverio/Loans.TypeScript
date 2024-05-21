import LivesIn from './LivesIn'

describe('LivesIn', () => {
  test('.isSatisfiedBy()', () => {
    const specification = new LivesIn(['SP'])

    const customer = {
      age: 29,
      cpf: '275.484.389-23',
      name: 'Vuxaywua Zukiagou',
      income: 3000.00,
      location: 'SP',
    }

    expect(specification.isSatisfiedBy(customer)).toBe(true)

    customer.location = 'PR'

    expect(specification.isSatisfiedBy(customer)).toBe(false)
  })
})
