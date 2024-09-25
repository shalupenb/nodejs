import express from "express";
import { products } from "./data/product.js";
import createProduct from "./middlewares/product-middleware.js"
import path from "node:path";
import url  from "node:url";
import productRoutes from "./routers/product-routes.js";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json()); //middleware
app.use(express.static("public")); //middleware
app.use("/products", productRoutes)

productRoutes.get("/", (req, res) => {
  res.sendFile(path.join(import.meta.dirname, "index.html"));
});

app.listen(PORT, ()=>{
  console.log(`Server is running http://lcoalhost:${PORT}`);
});