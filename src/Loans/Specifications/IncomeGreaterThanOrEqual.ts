import Customer from '../Customer'
import CompositeSpecification from './Base/CompositeSpecification'

export default class IncomeGreaterThanOrEqual extends CompositeSpecification<Customer> {
  private readonly threshold: number

  constructor(threshold: number) {
    super()
    this.threshold = threshold
  }

  public isSatisfiedBy(aCustomer: Customer): boolean {
    return aCustomer.income >= this.threshold
  }
}
