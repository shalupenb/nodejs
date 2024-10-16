import { Request, Response, NextFunction } from "express";
import { Book } from "../models/book-model.js";
import { IBookCreateOrUpdate } from "../data/books.js";

export class BookController {
  static createBook(req: Request<{},{},IBookCreateOrUpdate>, res: Response, next: NextFunction) {
    try {
      const id = Book.addBook(req.body).then((data => {
        res.status(201).json({
          id: data,
          title: req.body.title,
          author: req.body.author,
        });
        return;
      }));
      
    } catch (error) {
      console.log(error);
      res.status(500).send();
      return;
    }
  }
}