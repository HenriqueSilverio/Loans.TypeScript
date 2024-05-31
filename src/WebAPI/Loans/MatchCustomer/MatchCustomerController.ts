import { Request, Response } from 'express'
import Middleware from '../../Middleware'
import MatchingCustomerSchema from './MatchCustomerSchema'
import GetMatchingCustomerProfile from '../../../Loans/Services/GetMatchingCustomerProfile'

export default class MatchCustomer extends Middleware {
  private readonly schema: typeof MatchingCustomerSchema

  private readonly useCase: GetMatchingCustomerProfile

  constructor(schema: typeof MatchingCustomerSchema, useCase: GetMatchingCustomerProfile) {
    super()
    this.schema = schema
    this.useCase = useCase
  }

  protected async handler(request: Request, response: Response): Promise<void> {
    const { body } = await this.schema.parseAsync(request)

    const result = this.useCase.execute(body)

    response.json(result)
  }
}
