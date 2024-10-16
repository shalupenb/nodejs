import { connectionDb } from "../config/mysql-config.js";
import { IBookCreateOrUpdate } from "../data/books.js";

export class Book {
  static addBook(book: IBookCreateOrUpdate): Promise<number> {
    return new Promise((resolve, reject) => {
        connectionDb.query(
            "insert into books (title, author) value(?,?)",
            [book.title, book.author],
            (err, res: any) => {
                if (err) {
                    reject(new Error(err.message));
                } else {
                    resolve(res.insertId);
                }
            }
        );
    });
}

  static updateBook(id: number, book: IBookCreateOrUpdate) {
    connectionDb.query("update books set title=?, author=? where id=?", 
      [book.title, book.author, id], 
      (err, res: any) => {
      if(err) {
        throw new Error(err.message);
      } else {
        if (res.affectedRows > 0) {
          return true;
        }
      }
      return false;
    });
  }
};