import { TradeModel } from "../models/trade.model";
import type { TradeSchema } from "../schemas/trade";

export default class TradeController{
    constructor(){

    }
    allTrade = async()=>{
        return TradeModel.findAll()
    }
    
    createTrade = async(req: Request)=>{
        // console.log(data,'trade data');
        try {
            const fileData = await req.formData();
            const pair = fileData.get("pair") as string;
            const price = Number(fileData.get("price"));
            const file = fileData.get('image') as File;
            let buffer: Buffer | undefined;
            //conver file to buffer
            if(file){
                const arrayBuffer = await file.arrayBuffer();
                buffer = Buffer.from(arrayBuffer);
                console.log(buffer,'file buffer');
            } 
            const tradeData: TradeSchema = {
                pair,
                price,
                image: buffer,
                createdAt: new Date()
            };
            console.log(tradeData,'trade data with buffer')
            return TradeModel.create(tradeData);
        } catch (error) {
            console.error("Error in createTrade:",error);
        }
    }
}