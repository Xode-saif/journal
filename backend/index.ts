import { connectDB } from "./config/db";
import { apiRouter } from "./routes/api/trades";
import { authRouter } from "./routes/auth/authRoute";

await connectDB()
const server = Bun.serve({
  port: Number(process.env.PORT) || 3000,
  async fetch(req) {
    const url = new URL(req.url)
    const path = url.pathname
    // Handle preflight OPTIONS request
    if (req.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": "http://localhost:3000", // or specific origin
          "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
          "Access-Control-Allow-Credentials": "true"
        },
      });
    }

    try {
      let response:Response;
      if(path.startsWith("/auth")){
        response = await authRouter(req);
      } else if (path.startsWith("/api")) {
        response = await apiRouter(req)
      } else {
        return new Response("Not Found", { status: 404 })
      }
      const headers = new Headers(response.headers);
      headers.set("Access-Control-Allow-Origin", "http://localhost:3000"); // or restrict to your frontend
      headers.set("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
      headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
      headers.set("Access-Control-Allow-Credentials", "true");

      return new Response(await response.text(), {
        status: response.status,
        headers,
      });

    } catch (error) {
      console.error(error)
      return new Response("Internal Server Error", { status: 500 })
    }
  }
});

console.log(`Listening on ${server.url}`);