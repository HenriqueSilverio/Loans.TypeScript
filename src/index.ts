import Config from './Config'
import WebApplication from './WebAPI/WebApplication'
import { validator, controller } from './WebAPI/Loans/MatchCustomer'

const server = new WebApplication({ httpServerPort: Config.serviceHttpPort })

server.post('/match-customer', validator.getHandler(), controller.getHandler())

server.start()
