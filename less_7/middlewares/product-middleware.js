import { products } from "../data/product.js"

const createProduct = (req, res, next) => {
  if(req.body && req.body.title && req.body.price) {
    const new_id = products.length+1;
    const new_product = { ...req.body, id: new_id };
    req.new_product = new_product;
    next();
    return;
  } else {
    res.status(400).json({eror: "Body is empty"});
  }
  return;
};

export default createProduct;