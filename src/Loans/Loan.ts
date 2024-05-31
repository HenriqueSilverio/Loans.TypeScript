import Customer from './Customer'
import { Specification } from './Specifications/Base/CompositeSpecification'

export type LoanData = {
  type: string,
  interest_rate: number,
}

export default abstract class Loan {
  public abstract readonly type: string

  public abstract readonly interestRate: number

  protected abstract readonly specification: Specification<Customer>

  public matchProfile(customer: Customer): boolean {
    return this.specification.isSatisfiedBy(customer)
  }

  public toJSON(): LoanData {
    return {
      type: this.type,
      interest_rate: this.interestRate,
    }
  }
}
