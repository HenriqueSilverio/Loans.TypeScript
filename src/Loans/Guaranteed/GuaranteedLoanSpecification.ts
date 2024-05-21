import Customer from '../Customer'
import LivesIn from '../Specifications/LivesIn'
import AgeLessThan from '../Specifications/AgeLessThan'
import IncomeLessThanOrEqual from '../Specifications/IncomeLessThanOrEqual'
import IncomeGreaterThanOrEqual from '../Specifications/IncomeGreaterThanOrEqual'
import CompositeSpecification from '../Specifications/Base/CompositeSpecification'

export default class GuaranteedLoanSpecification extends CompositeSpecification<Customer> {
  private readonly incomeLowerBound = 3000.00

  private readonly incomeUpperBound = 5000.00

  private readonly ageLowerBound = 30

  private readonly allowedLocations = ['SP']

  public isSatisfiedBy(customer: Customer): boolean {
    return new IncomeLessThanOrEqual(this.incomeLowerBound)
      .Or(
        new IncomeGreaterThanOrEqual(this.incomeLowerBound)
          .And(new IncomeLessThanOrEqual(this.incomeUpperBound))
          .And(new AgeLessThan(this.ageLowerBound))
          .And(new LivesIn(this.allowedLocations)),
      )
      .isSatisfiedBy(customer)
  }
}
