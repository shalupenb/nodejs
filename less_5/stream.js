import path from "node:path";
import fs, { read } from "node:fs";
import{ log } from "node:console";

const __dirname = import.meta.dirname;
const pathToFolder =  path.join(__dirname, "files");
const pathToFile = path.join(pathToFolder, "data.txt");
const readStream = fs.createReadStream(pathToFile);
const writeStream = fs.createWriteStream(
  path.join(pathToFolder, "new_data.txt")
);

//readStream.pipe(writeStream); //Duplex Stream
readStream.on("data", (chunk) => {
  log(`start chunk\n`);
  log(chunk);
  writeStream.write(chunk);
  log(chunk.length);
  log(`end chunk\n`);
  readStream.pause(); // pause reading file
  setTimeout(()=> {
    readStream.resume();
  }, 5000);
});

readStream.on("open", () => {
  log(`File was opened`);
});
readStream.on("close", () => {
  log("File was closed");
});
readStream.on("end", () => {
  log("File was successfully read");
});