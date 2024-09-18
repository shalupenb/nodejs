import path from "node:path";
import fs from "node:fs";
import zlib from "node:zlib";
import { Transform } from "node:stream";

const __dirname = import.meta.dirname;
const pathToFolder =  path.join(__dirname, "files");
const pathToFile = path.join(pathToFolder, "data.txt");
const pathToNewFile = path.join(pathToFolder, "new_data.txt");

const upperCaseTr = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  },
});

const readStream = fs.createReadStream(pathToFile);
const writeStream = fs.createWriteStream(pathToNewFile);

readStream.pipe(upperCaseTr).pipe(writeStream);







// const pathToNewFile = path.join(pathToFolder, "new-data.txt");
// import{ log } from "node:console";
// const readStream = fs.createReadStream(pathToFile);
// const writeStream = fs.createWriteStream(
//   path.join(pathToFolder, "new-data.gzip")
// );
// const transformStream = zlib.createGzip("archive");
// readStream.pipe(transformStream).pipe(writeStream);