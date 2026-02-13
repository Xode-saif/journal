import { ObjectId } from "mongodb"
import { getDB } from "../config/db"

export interface Trade {
  _id?: ObjectId
  pair: string
  price: number
  createdAt: Date
}

const collection = () => getDB().collection<Trade>("trades")

export const TradeModel = {
  async findAll() {
    return collection().find().toArray()
  },

  async findById(id: string) {
    return collection().findOne({ _id: new ObjectId(id) })
  },

  async create(data: Omit<Trade, "_id">) {
    const result = await collection().insertOne(data)
    return { _id: result.insertedId, ...data }
  },

  async update(id: string, data: Partial<Trade>) {
    await collection().updateOne(
      { _id: new ObjectId(id) },
      { $set: data }
    )
    return this.findById(id)
  },

  async delete(id: string) {
    return collection().deleteOne({ _id: new ObjectId(id) })
  },
}
