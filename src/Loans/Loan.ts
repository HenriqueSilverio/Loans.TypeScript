import Customer from './Customer'
import { Specification } from './Specifications/Base/CompositeSpecification'

export type LoanDTO = {
  type: string,
  interest_rate: number,
}

export default abstract class Loan {
  public abstract get type(): string

  public abstract get interestRate(): number

  protected abstract readonly specification: Specification<Customer>

  public matchProfile(customer: Customer): boolean {
    return this.specification.isSatisfiedBy(customer)
  }

  public toJSON(): LoanDTO {
    return {
      type: this.type,
      interest_rate: this.interestRate,
    }
  }
}
