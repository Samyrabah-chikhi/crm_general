"use server";
import {z} from "zod"

const SignupFormSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters")
})

export async function signup(state, formData) {
    console.log("State:" + state)
    console.log("formData:" + formData)
     const validationResult = SignupFormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password')
     })

     if(!validationResult.success){
        console.log(validationResult.error.flatten().fieldErrors)
        return{
            errors: validationResult.error.flatten().fieldErrors
        }
     }
}