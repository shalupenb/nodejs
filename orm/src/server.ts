import express from "express";
import https from "node:https";
import fs from "node:fs";
import path from "node:path";
import "dotenv/config";
import { connection } from "./config/config.js";
import { categoryRouter } from "./routes/category-route.js";
import { productRouter } from "./routes/product-route.js";
import { userRouter } from "./routes/user-route.js";
import { postRouter } from "./routes/post-route.js";
import { profileRouter } from "./routes/profile-route.js";
import { clientRedis } from "./config/redis-config.js";
const PORT = process.env.PORT || 443;

const run = async () => {
  await connection.sync({ force: true });
  console.log("DB connection successfully");
  await clientRedis.connect();
  console.log("Redis connection successfully");
  const app = express();
    const PORT = 443;
    const options = {
      key: fs.readFileSync(path.join(__dirname, "..", "cert", "key.pem")),
      cert: fs.readFileSync(path.join(__dirname, "..", "cert", "cert.pem")),
    };
    app.use(express.json());
    app.use("/category", categoryRouter);
    app.use("/product", productRouter);
    app.use("/user", userRouter);
    app.use("/post", postRouter);
    app.use("/profile", profileRouter);
    await https
      .createServer(options, app)
      .listen(PORT, () => console.log(`Server is running https://127.0.0.1`));
};

try {
  run();
} catch (error: any) {
  console.log(error.message);
}