import RequestValidator from '../../RequestValidator'
import MatchingCustomerSchema from './MatchCustomerSchema'
import MatchingCustomerController from './MatchCustomerController'
import GetMatchingCustomerProfile from '../../../Loans/Services/GetMatchingCustomerProfile'

export const validator = new RequestValidator(MatchingCustomerSchema)

export const controller = new MatchingCustomerController(MatchingCustomerSchema, new GetMatchingCustomerProfile())
