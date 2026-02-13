import { apiHealth } from "../../controller/health"
import { trade } from "../../controller/trade"

export function apiRouter(req: Request): Response {
  const url = new URL(req.url)
  const path = url.pathname.replace("/api", "") // remove prefix
  // Root: /api
  if (path === "" || path === "/") {
    return Response.json({ message: "API root" })
  }

  // /api/health
  if (path === "/health") {
    return apiHealth()
  }

  // /api/users or /api/users/:id
  if (path.startsWith("/trades")) {
    const parts = path.split("/")
    const id = parts[2] // /trades/userId
    return trade(req, id)
  }

  return new Response("API Not Found", { status: 404 })
}