import Customer from '../Customer'
import CompositeSpecification from './Base/CompositeSpecification'

export default class AgeLessThan extends CompositeSpecification<Customer> {
  private readonly threshold: number

  constructor(threshold: number) {
    super()
    this.threshold = threshold
  }

  public isSatisfiedBy(aCustomer: Customer): boolean {
    return aCustomer.age < this.threshold
  }
}
