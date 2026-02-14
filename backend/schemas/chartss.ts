import { getDB } from "../config/db";

export interface ChartSS {
  filename: string;
  mimeType: string;
  size: number;
  data: Buffer;
  createdAt: Date;
}

// const images = getDB().collection<ChartSS>("chartss");