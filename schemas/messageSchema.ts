import {z} from 'zod'

export const MessageSchema = z.object({
    content : z
    .string()
    .min(1 , {message : 'Content must be at least of 1 character'})
    .max(300 , {message : 'Content must be no more than 300 characters'})
})