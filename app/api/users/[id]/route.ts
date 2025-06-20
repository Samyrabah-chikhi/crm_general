import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const userID = parseInt(params.id);
  const body = await req.json();
  const { name, email, hashedPassword, role } = body;
  try {
    const updatedUser = await prisma.user.update({
      where: { id: userID },
      data: {
        name,
        email,
        hashedPassword,
        role,
      },
    });
    return NextResponse.json(updatedUser);
  } catch (error) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
}

export async function DELETE(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const userID = parseInt(params.id);
  try {
    const deletedUser = await prisma.user.delete({
      where: { id: userID },
    });
    return NextResponse.json(deletedUser);
  } catch (error) {
    return NextResponse.json(
      {
        error: "User not found",
      },
      {
        status: 404,
      }
    );
  }
}
