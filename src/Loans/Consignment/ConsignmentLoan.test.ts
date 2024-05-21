import ConsignmentLoan from './ConsignmentLoan'

describe('ConsignmentLoan', () => {
  test('.toJSON()', () => {
    const loan = new ConsignmentLoan()

    const expected = { type: 'CONSIGNMENT', interest_rate: 2 }

    expect(loan.toJSON()).toEqual(expected)
  })

  describe('.matchProfile()', () => {
    test('Income greater than or equal to 5000', () => {
      const loan = new ConsignmentLoan()

      const customer = {
        age: 29,
        cpf: '275.484.389-23',
        name: 'Vuxaywua Zukiagou',
        income: 5000.00,
        location: 'SP',
      }

      expect(loan.matchProfile(customer)).toBe(true)
    })

    test('Income less than 5000', () => {
      const loan = new ConsignmentLoan()

      const customer = {
        age: 29,
        cpf: '275.484.389-23',
        name: 'Vuxaywua Zukiagou',
        income: 3000.00,
        location: 'SP',
      }

      expect(loan.matchProfile(customer)).toBe(false)
    })
  })
})
