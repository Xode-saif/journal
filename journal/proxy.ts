import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const protectedPaths = ["/home","/tools","/rules","dashboard"];

  const isProtected = protectedPaths.some(path =>
    request.nextUrl.pathname.startsWith(path)
  );
  if (request.nextUrl.pathname === "/") {
    if (token) {
      return NextResponse.redirect(new URL("/home", request.url))
    } else {
      return NextResponse.redirect(new URL("/login", request.url))
    }
  }
  if (request.nextUrl.pathname === "/login" && token) {
    return NextResponse.redirect(new URL("/home", request.url))
  }
  if (isProtected && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}
