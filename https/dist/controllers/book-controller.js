import { Book } from "../models/book-model.js";
export class BookController {
    static createBook(req, res, next) {
        try {
            const id = Book.addBook(req.body).then((data => {
                res.status(201).json({
                    id: data,
                    title: req.body.title,
                    author: req.body.author,
                });
                return;
            }));
        }
        catch (error) {
            console.log(error);
            res.status(500).send();
            return;
        }
    }
}
