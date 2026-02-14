import { UserModel } from "../models/user.model";
import type { User } from "../schemas/user";
import jwt from 'jsonwebtoken';
import type { UserLoginData, UserRegisterData } from "../types/interfaces";

export class AuthController {
    constructor() {

    }
    registerUser = async (req: Request) => {
        try {
            const data = await req.json() as UserRegisterData;
            const name = data?.name;
            const email = data?.email;
            const password = data?.password;

            if (!name || !email || !password) {
                return Response.json({ statusCode: 400, isSuccess: false, message: 'Missing required fields' })
            }
            const userExists = await UserModel.findByEmail(email)
            if (userExists) {
                return Response.json({ statusCode: 400, isSuccess: false, message: 'User already exists' })
            }
            const hashPassword = await Bun.password.hash(password.toString()) // default encryption is argon2id
            UserModel.createUser(name, email, hashPassword)
            return Response.json({ statusCode: 201, isSuccess: true, message: 'User registered successfully' })
        } catch (error) {
            return Response.json({ statusCode: 500, isSuccess: false, message: "Registration failed" })
        }
    }
    loginUser = async (req: Request) => {
        try {
            const data = await req.json() as UserLoginData;
            const email = data?.email;
            const password = data?.password;
            if (!email || !password) {
                return Response.json({ statusCode: 400, isSuccess: false, message: "Missing email or password" })
            }
            const user = await UserModel.findByEmail(email);
            if (!user) {
                return Response.json({ statusCode: 400, isSuccess: false, message: "User not found with this email" })
            }
            const passwordMatch = await Bun.password.verify(password.toString(),user.password);
            if (!process.env.JWT_SECRET) {
                throw new Error("JWT_SECRET is not defined");
            }
            if (!passwordMatch) {
                return Response.json({statusCode:400,isSuccess:false,message:"Incorrect password"});
            }
            const token = jwt.sign({
                id: user.userId,
                email: user.email,

            }, process.env.JWT_SECRET, { expiresIn: '1h' })
            return Response.json({
                statusCode: 200,
                isSuccess: true,
                token
            });
        } catch (error) {
            console.error("Login error:", error);
            return Response.json({ statusCode: 500, isSuccess: false, message: "Login failed" });
        }
    }
}