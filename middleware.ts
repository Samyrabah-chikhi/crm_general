import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "./app/backend/session";
import { cookies } from "next/headers";
import { cookie } from "./app/backend/session";

const protectedRoutes = ['/dashboard']
const publicRoutes = ['/','login','register']
const restrictedRoutes = ['/api']

export default async function middleware(req: NextRequest) {

    const path = req.nextUrl.pathname
    const isProtected = protectedRoutes.includes(path)
    const isPublic = publicRoutes.includes(path)

    const Cookie = (await cookies()).get(cookie.name)?.value
    const session = await decrypt(Cookie)

    console.log(isProtected)
    if(isProtected && !session?.userId){
        return NextResponse.redirect(new URL('/login', req.nextUrl))
    }

    return NextResponse.next();
}   

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
