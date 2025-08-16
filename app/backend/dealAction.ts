"use server";

import { z } from "zod";
import prisma from "@/lib/prisma";
import { verifySession } from "./session";

enum DealStage {
  LEAD = "LEAD",
  CONTACT = "CONTACT",
  NEGOTIATION = "NEGOTIATION",
  CLOSED = "CLOSED",
}

enum DealStatus {
  OPEN = "OPEN",
  WON = "WON",
  LOST = "LOST",
}

const DealCreationForm = z.object({
  title: z.string().min(1),
  value: z.number().nonnegative(),
  status: z.nativeEnum(DealStatus),
  stage: z.nativeEnum(DealStage),
  clientName: z.string().min(1), // changed to name instead of ID
});

export async function addDeal(state: any, formData: any) {
  const validationResult = DealCreationForm.safeParse({
    title: formData.get("title"),
    value: Number(formData.get("value")),
    status: formData.get("status"),
    stage: formData.get("stage"),
    clientName: formData.get("clientName"),
  });

  if (!validationResult.success) {
    console.log("failed to create deal");
    return {
      error: validationResult.error.flatten().fieldErrors,
    };
  }

  const user = await verifySession();
  if (!user) {
    return { error: { auth: "Unauthorized" } };
  }

  // 🔑 Find client by name (or create if doesn't exist)
  const client = await prisma.client.findFirst({
    where: { name: validationResult.data.clientName },
  });
  if(!client){
    return { error: `Client ${validationResult.data.clientName} doesn't exist` }
  }
  const deal = await prisma.deal.create({
    data: {
      title: validationResult.data.title,
      value: validationResult.data.value,
      status: validationResult.data.status,
      stage: validationResult.data.stage,
      clientId: client.id, // ✅ safe FK
      userId: Number(user.userId),
    },
    include: {
      client: true,
      user: true,
    },
  });

  return {
    success: true,
    deal,
  };
}


export async function deleteDeal(id: number) {
  const user = await verifySession();
    if (!user) {
      console.error("Unauthorized");
      return null;
    }
    console.log(user);
  try {
    const deal = await prisma.deal.delete({
      where: { id },
    });
    console.log("Deleted successfully:", deal);
    return { success: true };
  } catch (error) {
    console.error("Error deleting deal:", error);
    return { success: false, error };
  }
}

export async function getDeals() {
  const user = await verifySession();
  if (!user) {
    console.error("Unauthorized");
    return null;
  }

  const deals = await prisma.deal.findMany({
    where: { userId: Number(user.userId) },
    include: {
      client: true,
    },
  });

  const modifiedDeals = deals.map((deal) => ({
    ...deal,
    clientName: deal.client.name,
  }));

  return modifiedDeals;
}

