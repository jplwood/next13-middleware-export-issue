import { NextRequest, NextResponse } from "next/server";

/**
 * VERSION ONE, SINGLE EXPORT MATCHER ISN'T APPLIED
 */
const middleware = async (req: NextRequest) => {
  console.log(req.url);
  return NextResponse.next();
};

const config = {
  matcher: ["/((?!_next/static|_next/image|.*.ico|.*.svg).*)"],
};

export { middleware, config };

/**
 * VERSION TWO, MULTIPLE EXPORTS, MATCHER IS APPLIED
 */
// export const middleware = async (req: NextRequest) => {
//   console.log(`MIDDLEWARE: `, req.url);
//   return NextResponse.next();
// };

// export const config = {
//   //prettier-ignore
//   matcher: ["/((?!_next/static|_next/image|.*\.ico|.*\.svg).*)"],
// };
