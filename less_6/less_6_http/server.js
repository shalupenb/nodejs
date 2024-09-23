import { log } from "node:console";
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import url  from "node:url";
const PORT = 3000;

const mimeTypes = {
  ".css"  : "text/css",
  ".js"   : "text/javascript",
  ".png"  : "image/png",
  ".jpg"  : "image/jpg",
  ".jpeg" : "image/jpeg",
 };

 const getStaticFile = (res, filePath, ext) => {
  res.setHeader("Content-Type", mimeTypes[ext]);
  fs.readFile(path.join(".", "public", filePath), (err, data) => {
    if(err) {
      res.statusCode = 404;
      res.end();
    } else {
      res.end(data);
    }
  });
 };

const server = http.createServer((req, res) => {
  const myurl = req.url;
  //req.method();
  const queryParams = url.parse(req.url, true).query;
  console.log(queryParams);
  switch(myurl) {
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
    case "/products":
      res.write(
        fs.readFileSync(
          path.join(import.meta.dirname, "public", "pages", "form.html")
        )
      );
      break;
    default:
      const ext = path.extname(url);
      if(ext in mimeTypes) {
        getStaticFile(res, url, ext);
      } else {
        res.statusCode = 404;
        res.end();
      }
    break;
  }
  //res.end();
  //log(req.url, req.method);
  // const content = fs.readFileSync(path.join(import.meta.dirname, "public", "pages", "index.html"));
  // res.write(content);
  //res.writeHead(201, "Content-Type", "text/html");
  // res.write("<h1>hello from node js</h1>");
  // res.write("<div><p>This is my server</p></div>");
});
server.listen(PORT, ()=>{
    log(`Server is running http://localhost:${PORT}`);
  });
// http.createServer().listen(3000, ()=>{
//   log("Server is running http://loclhost:3000");
// });