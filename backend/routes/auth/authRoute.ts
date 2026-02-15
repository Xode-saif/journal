import { AuthController } from "../../controller/authController";

const authController = new AuthController();

export async function authRouter(req:Request){
    const url = new URL(req.url);
    const path = url.pathname.replace("/auth","");
    const method = req.method;
    if(method === 'POST' && path === '/login'){
        return authController.loginUser(req);
    }
    if(method === "POST" && path === '/register'){
        return authController.registerUser(req);
    }
    if(method === "POST" && path === '/logout'){
        return authController.logoutUser(req);
    }
    return new Response("API Not Found", { status: 404 })
}