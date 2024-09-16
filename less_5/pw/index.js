import path from "node:path";
import fs from "node:fs/promises";
import {Buffer} from "node:buffer";

async function createDirectory(dirPath) {
      await fs.mkdir(dirPath)
        .then(() => {console.log(`Directory "${dirPath}" created or already exists.`)})
        .catch((err) => {
          if(err.code != 'EEXIST') {
            console.error(err);
          }
          else {
            console.log(`Directory "${dirPath}" created or already exists.`);
          }
        });
      
}

async function createFileWithBuffer(filePath, bufferData) {
    await fs.writeFile(filePath, bufferData)
      .then(() => {console.log(`File "${filePath}" created with buffer data.`)})
      .catch((err) => {console.error(err)});
}

async function readFile(filePath) {
  fs.readFile(filePath)
    .then((data) => console.log(data.toString()))
    .catch((err) => console.error(err));
}

async function main() {
  const __dirname = import.meta.dirname;
  const pathToFolder =  path.join(__dirname, "practice");
  const pathToFile = path.join(pathToFolder, "practice.txt");
  const buff = Buffer.from("Node JS Practice");

  await createDirectory(pathToFolder);
  await createFileWithBuffer(pathToFile, buff);
  await readFile(pathToFile); 
}

main();