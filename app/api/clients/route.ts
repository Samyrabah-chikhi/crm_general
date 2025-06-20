import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"

export async function GET(){
    const clients = prisma.client.findMany();
    return NextResponse.json(clients)
}

export async function POST(req: Request) {
    const body = await req.json()
    const client = await prisma.client.create({
        data: body
    })
    return NextResponse.json(client)
}