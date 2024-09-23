import { log } from "node:console";
import http from "node:http";
import fs from "node:fs";
import querystring from "node:querystring"
import path from "node:path";
const PORT = 3000;

// Створюємо сервер
const server = http.createServer((req, res) => {
    switch(req.method) {
      case "GET":
        res.write(
          fs.readFileSync(
            path.join(import.meta.dirname, "index.html")
          )
        );
      break;
      case "POST":
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const parsedData = querystring.parse(body);
            const login = parsedData.login;
            const password = parsedData.password;
            console.log(`Login: ${login}, Password: ${password}`);

            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Logged in successfully');
        });
      break;
      default:
        res.end('Wrong method');
      break;
    }
});

server.listen(PORT, ()=>{
  log(`Server is running http://localhost:${PORT}`);
});