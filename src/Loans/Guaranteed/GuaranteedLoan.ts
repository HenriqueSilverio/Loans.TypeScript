import Loan from '../Loan'
import GuaranteedLoanSpecification from './GuaranteedLoanSpecification'

export default class GuaranteedLoan extends Loan {
  public readonly type = 'GUARANTEED'

  public readonly interestRate = 3

  protected readonly specification = new GuaranteedLoanSpecification()
}
