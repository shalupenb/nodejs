import "dotenv/config";
// import dotenv from "dotenv";
// dotenv.config();
console.log(process.env.APP_TITLE);
console.log(process.env.PORT);
console.log(process.pid);
setTimeout(() => {
  console.log("5 sec delay");
  console.log(process.exit(0));
}, 5000);
//while(true) {}