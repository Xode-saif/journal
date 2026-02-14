import { UserModel } from "../models/user.model";
import type { User } from "../schemas/user";
export class AuthController{
    constructor(){

    }
    registerUser= async(req:Request)=>{
        try {
            const data = await req.json() as User;
            const name = data?.name;
            const email = data?.email;
            const password = data?.password;
            
            if(!name || !email || !password){
                return Response.json({statusCode:400,isSuccess:false,message:'Missing required fields'})
            }
            const userExists = await UserModel.findByEmail(email)
            if(userExists){
                return Response.json({statusCode:400,isSuccess:false,message:'User already exists'})
            }
            const hashPassword = await Bun.password.hash(password.toString()) // default encryption is argon2id
            UserModel.createUser(name,email,hashPassword)
            return Response.json({statusCode:201,isSuccess:true,message:'User registered successfully'})
        } catch (error) {
           return Response.json({statusCode:500,isSuccess:false,message:"Registration failed"}) 
        }
    }
}