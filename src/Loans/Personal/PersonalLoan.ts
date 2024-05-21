import Loan from '../Loan'
import PersonalLoanSpecification from './PersonalLoanSpecification'

export default class PersonalLoan extends Loan {
  public readonly type = 'PERSONAL'

  public readonly interestRate = 4

  protected readonly specification = new PersonalLoanSpecification()
}
