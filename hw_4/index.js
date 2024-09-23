import path from "node:path";
import fs from "node:fs";
import{ log } from "node:console";
import { Transform } from "node:stream";

const __dirname = import.meta.dirname;
const pathToFile = path.join(__dirname, "input.txt");
const readStream = fs.createReadStream(pathToFile, { highWaterMark: 1 });
var stringUpperCase = "";

readStream.on("data", (chunk) => {
  log(chunk.toString());
  readStream.pause();
  setTimeout(()=> {
    readStream.resume();
  }, 100);
});
readStream.on("open", () => {
  log("File was opened");
});
readStream.on("end", () => {
  log("File was successfully read");
  log(stringUpperCase);
});

const upperCaseTr = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  },
});

readStream.pipe(upperCaseTr).on('data', (chunk) => {
  stringUpperCase += chunk.toString();
});