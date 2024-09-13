import { log } from "node:console";
// import fs from "node:fs";
// const content = fs.readFileSync("data.txt", { encoding: "utf-8" });
// log(content);

import { Buffer } from "node:buffer";
// const buff = Buffer.alloc(8);
// buff.write("hello world");
// console.log(buff);
// console.log(buff.toString());
const mess = "Node js program";
const buff = Buffer.from(mess);
log(buff);
log(buff.toString());
log(buff.toString("ascii", 0, 4));

const buff1 = Buffer.from("C#");
const buff2 = Buffer.from("JS");
//buff1.copy(buff2);
log(buff2.toString());
log(buff1.compare(buff2));