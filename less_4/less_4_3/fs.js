import path from "node:path";
import fs from "node:fs";
import crypto from "node:crypto";
import process from "node:process";
import { log } from "node:console";

const __dirname = import.meta.dirname;
const my_dir = path.join(__dirname, "files");

if(!fs.existsSync(my_dir)) {
  fs.mkdirSync(my_dir);
}

//#region 1
//========================1===========================
// const our_file = path.join(my_dir, "data.txt");
// const buff = Buffer.from(`Hello from Node JS\n`);

// //fs.writeFileSync(path.join(my_dir, "data.txt"), buff);
// fs.appendFileSync(our_file, buff);
// const content = fs.readFileSync(our_file);

// log(content.toString())
//=====================================================
//#endregion

//#region 2
//========================2===========================
// const our_file = path.join(my_dir, "data2.txt");
// const bufferSize = 10
// const buff = Buffer.alloc(bufferSize);
// crypto.randomFillSync(buff);
// fs.writeFileSync(our_file, buff);
// const content = fs.readFileSync(our_file);

// log(content.toString())
//=====================================================
//#endregion

//#region 3
//========================3===========================
const argument = process.argv[2];
log("Argument recieved from console: " + argument);

const buff = Buffer.from(argument);
log("Buffer from argument: " + buff);
//const content = fs.readFileSync(our_file);

//log(content.toString())
//=====================================================
//#endregion