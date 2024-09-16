// const simple = (value) => {
//   return new Promise((resolve, reject) => {
//     if(value > 0) resolve("value>0");
//     else reject("value<=0")
//   });
// };

// simple(0).then((data) => {
//   console.log(data);
// }).catch((err) => {
//   console.log(err);
// });
import path from "node:path";
import fs from "node:fs/promises";
import {Buffer} from "node:buffer";

const __dirname = import.meta.dirname;
const pathToFolder =  path.join(__dirname, "files");
const pathToFile = path.join(pathToFolder, "data.txt");
const buff = Buffer.from("Node JS Program");

fs.writeFile(pathToFile,  buff)
.then(() => {
  console.log("file was successfully created");
  fs.readFile(pathToFile)
  .then((data) => console.log(data.toString()))
  .catch((err) => console.error(err));
})
.catch((err) => console.error(err));