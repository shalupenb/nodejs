import { Router, Response, Request } from "express";
import { books, BookType } from "../data/books.js";
const booksRouter = Router();

booksRouter.get("/", (req, res: Response<Array<BookType>>) => {
  res.status(200).json(books);
});
booksRouter.post("/", (req: Request<{}, {}, BookType>, res) => {
  books.push(req.body);
  res.status(201).send();
});


export default booksRouter;