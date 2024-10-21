import express from "express"
import { categoryRouter } from "./routes/category-route";
import { connection } from "./config/config";

connection
  .sync()
  .then(() => {
    const app = express();
    const PORT = 3000;
    app.use(express.json());
    app.use("/category", categoryRouter);
    app.listen(PORT, () => 
    console.log(`Server is running http://localhost:${PORT}`)
    );
  })
  .catch((err) => {
    console.error(err);
  });