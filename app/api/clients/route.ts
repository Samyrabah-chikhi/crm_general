import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { verifySession } from "@/app/backend/session";

export async function GET() {
  const user = await verifySession();
  if (!user) {
    return NextResponse.json({ message: "Unothorized" }, { status: 401 });
  }
  console.log(user)
  const clients = await prisma.client.findMany({
    where: { userId: Number(user.userId) },
  });
  return NextResponse.json(clients);
}

export async function POST(req: Request) {
  const user = await verifySession();
  console.log(user)
  if (!user) {
    return NextResponse.json({ message: "Unothorized" }, { status: 401 });
  }

  const body = await req.json();
  const client = await prisma.client.create({
    data: {
      ...body,
      userId: Number(user?.userId),
    },
  });
  return NextResponse.json(client);
}
