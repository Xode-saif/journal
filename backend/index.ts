import { connectDB } from "./config/db";
import { apiRouter } from "./routes/api/trades";
import { authRouter } from "./routes/auth/authRoute";

await connectDB()
const server = Bun.serve({
  port: Number(process.env.PORT) || 3000,
  fetch(req) {
    const url = new URL(req.url)
    const path = url.pathname

    try {
      if(path.startsWith("/auth")){
        return authRouter(req);
      }
      if (path.startsWith("/api")) {
        return apiRouter(req)
      }

      return new Response("Not Found", { status: 404 })

    } catch (error) {
      console.error(error)
      return new Response("Internal Server Error", { status: 500 })
    }
  }
});

console.log(`Listening on ${server.url}`);