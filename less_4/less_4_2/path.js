import { log } from "node:console";
import path from "node:path";
const __dirname = import.meta.dirname;
const __filename = import.meta.filename;
log(path.sep);
log(path.join("\\users", "\\logs", ".log.txt"));
log(path.parse(__filename)); // выводит обьект пути
log(path.extname(path.join(__dirname, "db.json"))); // .json
log(path.isAbsolute("users" + path.sep + "logs")); // false -путь не абсолютный
log(path.isAbsolute(__dirname)); // true - путь абсолютный так указывается диск
log(path.dirname("desktop" + path.sep + "users" + path.sep + "logs")); // dekstop/users

log(path.resolve(__dirname, ".//users", "logs"));