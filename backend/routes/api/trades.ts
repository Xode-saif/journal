
import type { TradeSchema } from "../../schemas/trade";
import TradeController from "../../controller/trade"

const tradeController = new TradeController();
export async function apiRouter(req: Request): Promise<Response> {
  const url = new URL(req.url)
  const path = url.pathname.replace("/api", "") // remove prefix
  const method = req.method;
  // Root: /api
  if (path === "" || path === "/") {
    return Response.json({ message: "API root" })
  }

  if(method==='GET' && path ==='/alltrades'){
    console.log('fetching all trades...')
    const allTrades = await tradeController.allTrade()
    console.log(allTrades,'all trades')
    return Response.json({statusCode:200,isSuccess:true,data:allTrades})
  }
  if(method === 'POST' && path ==='/trades'){
    try {
      // const data = await req.json() as TradeSchema;
      await tradeController.createTrade(req)
      return Response.json({statusCode:200, isSuccess:true,message:'Saved Successfully'})
    } catch (error) {
      console.error("Create trade error:", error);
      return Response.json(
        {
          statusCode: 500,
          isSuccess: false,
          message: "Failed to save",
        },
        { status: 500 }
      );
    }

  }

  return new Response("API Not Found", { status: 404 })
}