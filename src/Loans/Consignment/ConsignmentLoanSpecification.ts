import Customer from '../Customer'
import CompositeSpecification from '../Specifications/Base/CompositeSpecification'
import IncomeGreaterThanOrEqual from '../Specifications/IncomeGreaterThanOrEqual'

export default class ConsignmentLoanSpecification extends CompositeSpecification<Customer> {
  private readonly incomeLowerBound = 5000.00

  public isSatisfiedBy(customer: Customer): boolean {
    return new IncomeGreaterThanOrEqual(this.incomeLowerBound).isSatisfiedBy(customer)
  }
}
