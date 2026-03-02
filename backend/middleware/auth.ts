import jwt from "jsonwebtoken";

function parseCookies(req: Request) {
  const cookie = req.headers.get("cookie");
  if (!cookie) return {};

  return Object.fromEntries(
    cookie.split(";").map(c => {
      const [k, ...v] = c.trim().split("=");
      return [k, v.join("=")];
    })
  );
}

export default function authMiddleware(
  handler: (req: Request & { user?: any }) => Promise<Response>
) {
  return async (req: Request) => {
    try {
      const cookies = parseCookies(req);
      const token = cookies.token;
      console.log(token,'this is token');

      if (!token) {
        return Response.json({ message: "Unauthorized", statusCode:401 }, { status: 401 });
      }

      if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET missing");
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      const reqWithUser = Object.assign(req, { user: decoded });

      return handler(reqWithUser);
    } catch {
      return Response.json({ message: "Invalid or expired token" }, { status: 401 });
    }
  };
}