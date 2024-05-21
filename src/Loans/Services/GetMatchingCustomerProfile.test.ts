import GetMatchingCustomerProfile from './GetMatchingCustomerProfile'

describe('GetMatchingCustomerProfile', () => {
  describe('.execute()', () => {
    test('Customer profile matches Consignment loan', () => {
      const useCase = new GetMatchingCustomerProfile()

      const customer = {
        age: 29,
        cpf: '275.484.389-23',
        name: 'Vuxaywua Zukiagou',
        income: 7000.00,
        location: 'SP',
      }

      const expected = {
        customer: 'Vuxaywua Zukiagou',
        loans: [
          {
            type: 'CONSIGNMENT',
            interest_rate: 2,
          },
        ],
      }

      expect(useCase.execute(customer)).toEqual(expected)
    })

    test('Customer profile matches Guaranteed and Personal loans', () => {
      const useCase = new GetMatchingCustomerProfile()

      const customer = {
        age: 29,
        cpf: '275.484.389-23',
        name: 'Vuxaywua Zukiagou',
        income: 4800.00,
        location: 'SP',
      }

      const expected = {
        customer: 'Vuxaywua Zukiagou',
        loans: [
          {
            type: 'GUARANTEED',
            interest_rate: 3,
          },
          {
            type: 'PERSONAL',
            interest_rate: 4,
          },
        ],
      }

      expect(useCase.execute(customer)).toEqual(expected)
    })

    test('Customer profile doesnt match any loans', () => {
      const useCase = new GetMatchingCustomerProfile()

      const customer = {
        age: 42,
        cpf: '275.484.389-23',
        name: 'Vuxaywua Zukiagou',
        income: 4200.00,
        location: 'PR',
      }

      const expected = {
        customer: 'Vuxaywua Zukiagou',
        loans: [],
      }

      expect(useCase.execute(customer)).toEqual(expected)
    })
  })
})
