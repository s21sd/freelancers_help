"use server"
import { RegisterValidator } from '@/validations/authSchema'
import vine, { errors } from '@vinejs/vine'
import { createClient } from '@/lib/supabase/supabaseServer'
import { cookies } from 'next/headers'
export async function registerAction(prevState: any, formdata: FormData) {
    const supabase = createClient(cookies());
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
        
        // Checking username if exists
        const { data: userdata, error } = await supabase.from("auth").select("id").eq("username", payload.username)
        console.log("The user data ", userdata)
        console.log("The error ", error)

    } catch (error) {
        if (error instanceof errors.E_VALIDATION_ERROR) {
            console.log(error.messages)
            return { status: 400, error: error.messages }
        }
    }

}