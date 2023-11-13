import { z } from 'zod'

export const AuthSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
})

export type LoginRequest = z.infer<typeof AuthSchema>

export type LoginResponse = {
  token: string
  halil: string
}
export type LogoutResponse = {
  message: string
}
