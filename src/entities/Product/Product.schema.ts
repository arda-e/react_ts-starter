import { z } from 'zod'

export const ProductSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number(),
  image: z.string(),
  category: z.string(),
})

export type Product = z.infer<typeof ProductSchema>
export type ProductWithId = Product & { id: string }
export type ProductWithIdAndTimeStamp = ProductWithId & { createdAt: string; updatedAt: string }
