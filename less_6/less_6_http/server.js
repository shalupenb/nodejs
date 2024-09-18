import { log } from "node:console";
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
const PORT = 3000;

const mimeTypes = {
  ".css"  : "text/css",
  ".js"   : "text/javascript",
  ".png"  : "image/png",
  ".jpg"  : "image/jpg",
  ".jpeg" : "image/jpeg",
 };


const server = http.createServer((req, res) => {
  const url = req.url;
  //req.method();
  switch(url) {
    case "/":
      res.write(
        fs.readFileSync(
          path.join(import.meta.dirname, "public", "pages", "index.html")
        )
      );
      break;
    case "/contacts":
      res.write(
        fs.readFileSync(
          path.join(import.meta.dirname, "public", "pages", "contacts.html")
        )
      );
      break;
    default:
      break;
  }
  //res.end();
  //log(req.url, req.method);
  // const content = fs.readFileSync(path.join(import.meta.dirname, "public", "pages", "index.html"));
  // res.write(content);
  //res.writeHead(201, "Content-Type", "text/html");
  // res.write("<h1>hello from node js</h1>");
  // res.write("<div><p>This is my server</p></div>");
  res.end();
});
server.listen(PORT, ()=>{
    log(`Server is running http://localhost:${PORT}`);
  });
// http.createServer().listen(3000, ()=>{
//   log("Server is running http://loclhost:3000");
// });