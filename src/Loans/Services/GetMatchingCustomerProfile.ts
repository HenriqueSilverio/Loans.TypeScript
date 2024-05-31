import Customer from '../Customer'
import { LoanData } from '../Loan'
import ConsignmentLoan from '../Consignment/ConsignmentLoan'
import GuaranteedLoan from '../Guaranteed/GuaranteedLoan'
import PersonalLoan from '../Personal/PersonalLoan'

export type GetMatchingCustomerProfileResponse = {
  customer: string,
  loans: Array<LoanData>,
}

export default class GetMatchingCustomerProfile {
  private readonly loans = [
    new ConsignmentLoan(),
    new GuaranteedLoan(),
    new PersonalLoan(),
  ]

  public execute(customer: Customer): GetMatchingCustomerProfileResponse {
    return {
      customer: customer.name,
      loans: this.loans
        .filter((loan) => loan.matchProfile(customer))
        .map((loan) => loan.toJSON()),
    }
  }
}
