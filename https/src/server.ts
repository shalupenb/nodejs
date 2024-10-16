import express from "express";
import fs from "node:fs";
import https from "node:https";
import path from "node:path";
import booksRouter from "./routes/book-routes.js";
import { connectionDb } from "./config/mysql-config.js";

const serverRun = () => {
  const __dirname = import.meta.dirname;
  const PORT = 443;
  const app = express();
  const options = {
    key: fs.readFileSync(path.join(__dirname, "..", "cert", "key.pem")),
    cert: fs.readFileSync(path.join(__dirname, "..", "cert", "cert.pem")),
  };

  https
    .createServer(options, app)
    .listen(PORT, ()=>console.log(`Server is running https://127.0.0.1`));
  app.use(express.json());
  app.use("/books", booksRouter);
  app.all('*', (req, res) => {
    res.status(404).send("Not Found");
  });
};
connectionDb.connect((err) => {
  if(err) {
    console.error(err);
  } else {
    serverRun();
  }
});