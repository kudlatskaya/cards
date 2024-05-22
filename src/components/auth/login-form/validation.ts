import { z } from 'zod'

export const loginSchema = z
	.object({
		email: z.string().email({ message: 'Invalid email address' }),
		password: z.string().min(3, { message: 'Too short password bitch' }),
		rememberMe: z.boolean().default(false),
	})
	.partial()

export type FormValues = z.infer<typeof loginSchema>
