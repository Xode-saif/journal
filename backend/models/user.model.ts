import { getDB } from "../config/db"
import type { User } from "../schemas/user";


const userCollection = ()=>{
    return getDB().collection<User>('users')
}

export const UserModel ={
    async findByEmail(email:string){
        return userCollection().findOne({email});
    },

    async createUser(name:string,email:string,password:string){
        return userCollection().insertOne({name,email,password,userId:crypto.randomUUID()});
    }
}