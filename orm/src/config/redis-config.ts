import { createClient } from "redis";
import "dotenv/config"
export const clientRedis = createClient({
  url:`redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`
});