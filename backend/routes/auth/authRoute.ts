export async function authRouter(req:Request){
    const url = new URL(req.url);
    const path = url.pathname.replace("/auth","");
    const method = req.method;
    if(method === 'GET' && path === '/login'){

    }
    if(method === "POST" && path === '/register'){
        
    }
}