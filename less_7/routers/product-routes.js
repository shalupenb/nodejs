import { Router } from "express";
import { products } from "../data/product.js";
import createProduct from "../middlewares/product-middleware.js";

const productRoutes = Router();

productRoutes
  .route("/")
  .get((req, res) => {
    res.status(200).json(products);
  })
  .post(createProduct, (req, res) => {
    products.push(req.new_product);
    res.status(201).json(req.new_product);
});
productRoutes.get("/:id_product", (req, res, next) => {
  const id = +req.params.id_product;
  if(!isNaN(id))
  {
    const product = products.find((el) => el.id === id);
    res.status(200).json(product);
  }
  next();
});

productRoutes.all("*", (req, res) => {
  res.status(404).send();
});

export default productRoutes;