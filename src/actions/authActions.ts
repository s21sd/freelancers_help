"use server"
import { RegisterValidator } from '@/validations/authSchema'
import vine, { errors } from '@vinejs/vine'
import { createClient } from '@/lib/supabase/supabaseServer'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
export async function registerAction(prevState: any, formdata: FormData) {
    const supabase = createClient(cookies());
    try {
       
        const data = {
            name: formdata.get("name"),
            username: formdata.get("username"),
            email: formdata.get("email"),
            password: formdata.get("password"),
            password_confirmation: formdata.get("password_confirmation"),
        }
        const payload = await RegisterValidator.validate(data)

        // Checking username if exists
        const { data: userdata, error } = await supabase.from("Auth").select("id").eq("username", payload.username)
        console.log("The user data ", userdata)
        console.log("The error ", error)
        if (userdata && userdata?.length > 0) {
            return {
                status: 400,
                errors: {
                    username: "Username is already used"
                }
            }
        }

        const { error: signUpErr } = await supabase.auth.signUp({
            email: payload.email,
            password: payload.password,
            options: {
                data: {
                    name: payload.name,
                    username: payload.username
                }
            }

        })
        // Now After Sign up Going to sign in direclty
        await supabase.auth.signInWithPassword({
            email: payload.email,
            password: payload.password
        })
        if (signUpErr) {
            return {
                status: 400,
                error: {
                    email: signUpErr.message
                }
            }
        }

    } catch (error) {
        if (error instanceof errors.E_VALIDATION_ERROR) {
            console.log(error.messages)
            return { status: 400, error: error.messages }
        }
    }
    return redirect("/")

}