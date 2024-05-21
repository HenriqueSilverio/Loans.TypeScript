import GuaranteedLoan from './GuaranteedLoan'

describe('GuaranteedLoan', () => {
  test('.toJSON()', () => {
    const loan = new GuaranteedLoan()

    const expected = { type: 'GUARANTEED', interest_rate: 3 }

    expect(loan.toJSON()).toEqual(expected)
  })

  describe('.matchProfile()', () => {
    test('Income less than or equal to 3000', () => {
      const customer = {
        age: 29,
        cpf: '275.484.389-23',
        name: 'Vuxaywua Zukiagou',
        income: 3000.00,
        location: 'SP',
      }

      const loan = new GuaranteedLoan()

      expect(loan.matchProfile(customer)).toBe(true)
    })
    test('Valid income range, age and location', () => {
      const customer = {
        age: 29,
        cpf: '275.484.389-23',
        name: 'Vuxaywua Zukiagou',
        income: 4000.00,
        location: 'SP',
      }

      const loan = new GuaranteedLoan()

      expect(loan.matchProfile(customer)).toBe(true)
    })
    test('Invalid income range', () => {
      const customer = {
        age: 29,
        cpf: '275.484.389-23',
        name: 'Vuxaywua Zukiagou',
        income: 6000.00,
        location: 'SP',
      }

      const loan = new GuaranteedLoan()

      expect(loan.matchProfile(customer)).toBe(false)
    })
    test('Invalid age', () => {
      const customer = {
        age: 30,
        cpf: '275.484.389-23',
        name: 'Vuxaywua Zukiagou',
        income: 4000.00,
        location: 'SP',
      }

      const loan = new GuaranteedLoan()

      expect(loan.matchProfile(customer)).toBe(false)
    })
    test('Invalid location', () => {
      const customer = {
        age: 29,
        cpf: '275.484.389-23',
        name: 'Vuxaywua Zukiagou',
        income: 4000.00,
        location: 'PR',
      }

      const loan = new GuaranteedLoan()

      expect(loan.matchProfile(customer)).toBe(false)
    })
  })
})
