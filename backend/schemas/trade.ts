import { getDB } from "../config/db";
import { ObjectId } from "mongodb"
import type { ChartSS } from "./chartss";

export interface TradeSchema{
    _id?: ObjectId
    pair: string
    price: number
    ChartSS?:ChartSS
    image:Buffer|undefined
    createdAt: Date
}

