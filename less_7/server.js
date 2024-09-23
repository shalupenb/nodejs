import express from "express";
import { products } from "./data/product.js";
import path from "node:path";
import url  from "node:url";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json()); //middleware
app.use(express.static("public")); //middleware
app.get('/', (req, res) => {
  res.sendFile(path.join(import.meta.dirname, "index.html"));
});
app.get('/products', (req, res) => {
  //res.send("Welcome to NodeJS server");
  res.status(200).json(products);
});
app.get('/products/:id_product', (req, res) => {
  //res.send("Welcome to NodeJS server");
  const id = +req.params.id_product;
  const product = products.find((el) => el.id === id);
  res.status(200).json(product);
});
app.post('/', (req, res) => {
  const new_id = products.length+1;
  const new_product = { ...req.body, id: new_id };
  products.push(new_product);
  res.status(201).json({new_product});
});

app.listen(PORT, ()=>{
  console.log(`Server is running http://lcoalhost:${PORT}`);
});