import Customer from '../Customer'
import CompositeSpecification from './Base/CompositeSpecification'

export default class LivesIn extends CompositeSpecification<Customer> {
  private readonly allowedLocations: Array<string>

  constructor(allowedLocations: Array<string>) {
    super()
    this.allowedLocations = allowedLocations.map((location) => location.toUpperCase())
  }

  public isSatisfiedBy(customer: Customer): boolean {
    return this.allowedLocations.includes(customer.location.toUpperCase())
  }
}
