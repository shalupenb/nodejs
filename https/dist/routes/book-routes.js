import { Router } from "express";
import { books } from "../data/books.js";
import { BookController } from "../controllers/book-controller.js";
const booksRouter = Router();
booksRouter.get("/", (req, res) => {
    res.status(200).json(books);
});
booksRouter.post("/", BookController.createBook, (req, res) => { });
export default booksRouter;
