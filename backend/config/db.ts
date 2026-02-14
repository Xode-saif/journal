import { MongoClient } from "mongodb"

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017"
const DB_NAME = process.env.DB_NAME || "trading_journal"

let client: MongoClient
let db: ReturnType<MongoClient["db"]>

export async function connectDB() {
  if(db) return db;
  if(!client){
    client = new MongoClient(MONGO_URI)
  }
  try {
    await client.connect()
    db = client.db(DB_NAME)
    console.log("✅ MongoDB connected")
  } catch (error) {
    console.error("MongoDB connection failed:", error)
    throw new Error("Database connection failed") 
  }
  return db
}

export function getDB() {
  if (!db) {
    throw new Error("Database not initialized. Call connectDB() first.")
  }
  return db
}
