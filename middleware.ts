// middleware.ts
import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "ar"];
const defaultLocale = "en";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip internal and static files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon.ico") ||
    /\.(.*)$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  const pathLocale = pathname.split("/")[1];

  // If path already includes a valid locale, continue
  if (locales.includes(pathLocale)) {
    return NextResponse.next();
  }

  // Get browser language
  const langHeader = request.headers.get("accept-language") || "";
  const browserLocale = langHeader.split(",")[0].split("-")[0];
  const locale = locales.includes(browserLocale)
    ? browserLocale
    : defaultLocale;

  // Redirect to locale-prefixed path
  const newUrl = request.nextUrl.clone();
  newUrl.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;

  console.log("[middleware] redirecting to:", newUrl.pathname);

  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)"],
};
