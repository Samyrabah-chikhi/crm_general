"use server";

import { z } from "zod";
import { cookies } from "next/headers";
import { verifySession } from "./session";
import prisma from "@/lib/prisma";

enum ClientStatus {
  LEAD = "LEAD",
  ACTIVE = "ACTIVE",
  CLOSED = "CLOSED",
}

const ClientCreationForm = z.object({
  name: z.string(),
  phone: z
    .string()
    .regex(/^\d{7,15}$/, "Phone must be digits only and 7-15 characters long"),
  email: z.string().email("invalid email"),
  company: z.string(),
  status: z.nativeEnum(ClientStatus),
});

export async function addClient(state: any, formData: any) {
  const validationResult = ClientCreationForm.safeParse({
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    company: formData.get("company"),
    status: formData.get("status"),
  });
  if (!validationResult.success) {
    console.log("failed to create client");
    return {
      error: validationResult.error.flatten().fieldErrors,
    };
  }

  const user = await verifySession();
  if (!user) {
    return { error: { auth: "Unauthorized" } };
  }

  const client = await prisma.client.create({
    data: {
      ...validationResult.data,
      userId: Number(user.userId),
    },
  });

  return { success: true, client };
}

export async function getClients() {
  const user = await verifySession();
  if (!user) {
    console.error("Unauthorized");
    return null;
  }
  console.log(user);
  const clients = await prisma.client.findMany({
    where: { userId: Number(user.userId) },
  });
  return clients;
}
