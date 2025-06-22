"use server";

import { z } from "zod";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { createSession, deleteSession} from "../backend/session";
import { redirect } from "next/navigation";

const SignupFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const SigninFormSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export async function signin(state, formData) {
  const validationResult = SigninFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validationResult.success) {
    console.log(validationResult.error.flatten().fieldErrors);
    return {
      errors: validationResult.error.flatten().fieldErrors,
    };
  }

  const {email, password} = validationResult.data

  const user = await prisma.user.findUnique({
    where: {email: email}
  })

  if (!user) {
    return { error: "No user found with that email." };
  }

  const isValid = await bcrypt.compare(password, user.hashedPassword)
  if(!isValid){
    return { error: "Incorrect password" };
  }

  await createSession(user.id.toString())
  redirect('/dashboard')
}

export async function signup(state, formData) {
  //validation
  const validationResult = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validationResult.success) {
    console.log(validationResult.error.flatten().fieldErrors);
    return {
      errors: validationResult.error.flatten().fieldErrors,
    };
  }
  //User Creation
  const { name, email, password } = validationResult.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name: name,
      email: email,
      hashedPassword: hashedPassword,
      role: "MEMBER",
    },
  });
  // session created
  await createSession(user.id.toString());
  redirect("/dashboard");
}

export async function signout(){
  await deleteSession();
  redirect("/")
}