import { Router } from "express";
import { books } from "../data/books.js";
const booksRouter = Router();
booksRouter.get("/", (req, res) => {
    res.status(200).json(books);
});
booksRouter.post("/", (req, res) => {
    books.push(req.body);
    res.status(201).send();
});
export default booksRouter;
