import { Router, Response, Request } from "express";
import { books, IBook } from "../data/books.js";
import { BookController } from "../controllers/book-controller.js";
const booksRouter = Router();

booksRouter.get("/", (req, res: Response<Array<IBook>>) => {
  res.status(200).json(books);
});
booksRouter.post("/", BookController.createBook, (req: Request<{}, {}, IBook>, res: Response) => {});


export default booksRouter;