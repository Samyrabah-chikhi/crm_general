import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, hashedPassword, role } = body;
  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        hashedPassword,
        role,
      },
    });
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      {
        error: "User creation failed",
      },
      {
        status: 400,
      }
    );
  }
}
