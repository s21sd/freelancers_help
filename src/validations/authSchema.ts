import vine from '@vinejs/vine'
import { JSONAPIErrorReporter } from './customErrorReporter'
vine.errorReporter = () => new JSONAPIErrorReporter() // This is for the custom error

const RegisterSchema = vine.object({
    name: vine.string().minLength(2).maxLength(150),
    username: vine.string().minLength(2).maxLength(50),
    email: vine.string().email(),
    password: vine
        .string()
        .minLength(6)
        .maxLength(32)
        .confirmed()
})

export const RegisterValidator = vine.compile(RegisterSchema)