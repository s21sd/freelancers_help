"use server"
import { RegisterValidator } from '@/validations/authSchema'
import vine, { errors } from '@vinejs/vine'
export async function registerAction(formdata: FormData) {
    try {
        console.log("The form data is ", formdata)
        const data = {
            name: formdata.get("name"),
            username: formdata.get("username"),
            email: formdata.get("email"),
            password: formdata.get("password"),
            password_confirmation: formdata.get("password_confirmation"),
        }
        const payload = await RegisterValidator.validate(data)
        console.log(payload)

    } catch (error) {
        if (error instanceof errors.E_VALIDATION_ERROR) {
            console.log(error.messages)
            return { status: 400, error: error.messages }
        }
    }

}