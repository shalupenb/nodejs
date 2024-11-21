import express from 'express';
import https from 'https';
import fs from 'node:fs';
import path from 'node:path';
import userRouter from './routes/user-routes.js'
import adRouter from './routes/ad-routes.js';
import dotenv from 'dotenv';
import messageRoutes from './routes/message-routes.js';
import { connection } from './config/sequelize-config.js';

const PORT = process.env.PORT || 3000;

dotenv.config();

const run = async() => {
    await connection.sync({ force: true });
    console.log("DB connection successfully");
    const options = {
        key: fs.readFileSync(path.join(__dirname, "..", "cert", "key.pem")),
        cert: fs.readFileSync(path.join(__dirname, "..", "cert", "cert.pem"))
    };
    const app = express();
    app.use(express.json());
    app.use('/users', userRouter);
    app.use('/ads', adRouter);
    app.use('/messages', messageRoutes);
    https.createServer(options, app).listen(PORT, () => console.log(`Server is running https://127.0.0.1:${PORT}`));
};

try {
    run();
  } catch (error: any) {
    console.log(error.message);
}
