"use server";

import { z } from "zod";
import prisma from "@/lib/prisma";
import { verifySession } from "./session";

enum DealStage {
  LEAD,
  CONTACT,
  NEGOTIATION,
  CLOSED,
}

enum DealStatus {
  OPEN,
  WON,
  LOST,
}

const DealCreationForm = z.object({
  title: z.string().min(1),
  value: z.number().nonnegative(),
  status: z.nativeEnum(DealStatus),
  stage: z.nativeEnum(DealStage),
  clientId: z.number(),
});
