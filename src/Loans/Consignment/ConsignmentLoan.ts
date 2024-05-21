import Loan from '../Loan'
import ConsignmentLoanSpecification from './ConsignmentLoanSpecification'

export default class ConsignmentLoan extends Loan {
  public readonly type = 'CONSIGNMENT'

  public readonly interestRate = 2

  protected readonly specification = new ConsignmentLoanSpecification()
}
