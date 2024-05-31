import { z } from 'zod'

export const body = z.object({
  age: z.number().int().positive(),
  cpf: z.string().trim().min(11).max(14),
  name: z.string().trim().min(2),
  income: z.number().positive(),
  location: z.string().trim().toUpperCase().length(2),
})

const MatchCustomerSchema = z.object({
  body,
})

export default MatchCustomerSchema
