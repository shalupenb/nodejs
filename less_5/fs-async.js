import path from "node:path";
import fs from "node:fs";
import {Buffer} from "node:buffer";

const __dirname = import.meta.dirname;
const pathToFolder =  path.join(__dirname, "files");
const pathToFile = path.join(pathToFolder, "data.txt");
const buff = Buffer.from("Node JS Program");

fs.access(pathToFolder, (err)=>{
  if(err) {
    if(err.code === 'ENOENT'){
      //create folder
      fs.mkdir(pathToFolder, (err)=>{
        if(err) {
          console.log(err);
          process.exit();
        }
      });
    }
    else {
      console.log(err);
      process.exit();
    }
  }
  //пишем файл
  fs.writeFile(pathToFile, buff, (err) => {
    if(err) {
      console.log(err);
      process.exit();
    }
    //читаем файл
    fs.readFile(pathToFile, (err, data) => {
      if(err === null) {
        console.log(data.toString());
      }
    });
  });
});