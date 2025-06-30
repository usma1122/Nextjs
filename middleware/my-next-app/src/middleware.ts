import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request : NextRequest){
    // return NextResponse.redirect(new URL("/" , request.url))
    // return NextResponse.rewrite(new URL("/" , request.url))

    //this is conditional Appraoch
    
    // if (request.nextUrl.pathname === "/profile") {
    //     return NextResponse.redirect(new URL("/" , request.nextUrl))
    // }

    // useing cookies 
    const response = NextResponse.next()
    const themepreference = request.cookies.get("theme")
    if (!themepreference) {
        response.cookies.set("theme" , "dark")
    }
    response.headers.set("custom-header" ,"custom-value")
    return response ;
}

// config object tell to apply middleware to /profile
// this is matcher appraoch 

 export const config = {
    matcher : "/profile"
 }


