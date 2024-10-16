import { connectionDb } from "../config/mysql-config.js";
export class Book {
    static addBook(book) {
        return new Promise((resolve, reject) => {
            connectionDb.query("insert into books (title, author) value(?,?)", [book.title, book.author], (err, res) => {
                if (err) {
                    reject(new Error(err.message));
                }
                else {
                    resolve(res.insertId);
                }
            });
        });
    }
    static updateBook(id, book) {
        connectionDb.query("update books set title=?, author=? where id=?", [book.title, book.author, id], (err, res) => {
            if (err) {
                throw new Error(err.message);
            }
            else {
                if (res.affectedRows > 0) {
                    return true;
                }
            }
            return false;
        });
    }
}
;
