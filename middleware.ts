import { NextRequest, NextResponse } from "next/server";

/* Scenario 3 - Direct export */
export { default } from "next-auth/middleware";

/* Scenario 2 */
// import middleware from "next-auth/middleware";

// export default middleware;

/* Scenario 1 */
// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL("/new-page", request.url));
// }

export const config = {
  matcher: ["/users/:id*", "/dashboard/:path*"],
};
