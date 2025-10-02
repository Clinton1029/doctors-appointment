export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/appointment/:path*",  // protect appointment page
    "/dashboard/:path*",    // protect dashboard
    "/doctors/:path*",      // optional, if you want to restrict
  ],
};
