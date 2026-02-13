type Trade = {
  id: string
  pair: string
  price: number
}

const trades: Trade[] = [] //relace with db
export function trade(req: Request, id?: string){
    const method = req.method;
    if(method === 'GET'){
        return Response.json({data:"124321"})
    }
    if(method === 'POST'){
        
    }
    return Response.json({error:"No request method"})
}