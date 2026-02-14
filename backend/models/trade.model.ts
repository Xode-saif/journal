import { ObjectId } from "mongodb"
import { type TradeSchema } from "../schemas/trade"
import { getDB } from "../config/db"


export function tradesCollection(){
  return getDB().collection<TradeSchema>('trades')
} 

export const TradeModel = {
  async findAll() {
    return tradesCollection().find().toArray()
  },

  async findById(id: string) {
    return tradesCollection().findOne({ _id: new ObjectId(id) })
  },

  async create(data: Omit<TradeSchema, "_id">) {
    const result = await tradesCollection().insertOne(data)
    return { _id: result.insertedId, ...data }
  },

  async update(id: string, data: Partial<TradeSchema>) {
    await tradesCollection().updateOne(
      { _id: new ObjectId(id) },
      { $set: data }
    )
    return this.findById(id)
  },

  async delete(id: string) {
    return tradesCollection().deleteOne({ _id: new ObjectId(id) })
  },
}
