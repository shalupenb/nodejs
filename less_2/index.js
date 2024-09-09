// import "dotenv/config";
// import dotenv from "dotenv";
// dotenv.config();
// console.log(process.env.APP_TITLE);
// console.log(process.env.PORT);
// console.log(process.pid);
// setTimeout(() => {
//   console.log("5 sec delay");
//   console.log(process.exit(0));
// }, 5000);
// while(true) {}
// const interval = setInterval(() => {
//   console.log("sI");
// }, 1000);

// setTimeout(() => {
//   clearInterval(interval);
//   console.log("interval cleared");
// }, 5000);

// setImmediate(() => {
//   console.log("set immediate");
// });

// Promise.resolve().then(() => {
//   console.log("Promise");
// });

// queueMicrotask(() => {
//   console.log("microtask");
// });

// const product = {
//   id: 1,
//   title: "tv",
//   price: 30000,
// };
// const product2 = product; // поверхностное копирование
// product.id = 2;
// console.log(product2);

//const product2 = { ...product }; // ... = оператор spread, глубокое копирование однако плохо рабоатет со сложными обьектами к примеру с вложенностью

// const product2 = structuredClone(product); // также делает глуюокую копию обьекта

// product.id = 2;
// console.log(product2);
// const user = { 
//   id: 1,
//   title: "shalupenb",
//   address: {
//     street: "Sadova",
//     ap: 5,
//   },
// };

// //const user2 = { ...user }; // spread плохо рабоатет со сложными обьектами к примеру с вложенностью
// const user2 = structuredClone(user); // structedClone() хорошо работает со сложными обьектами и делает полноценную глубокую копию

// user.address.ap = 100;
// user.id = 2;

// console.table(user2);
// const str = "Hello";
// const encoding = btoa(str); // base64 кодировка
// console.log(encoding);
// const decoding = atob(encoding);
// console.log(decoding);
// const start = performance.now();
// let sum = 0;
// for(let i=0;i<1e9;i++) {
//   sum += i;
// }
// console.log(sum);
// console.log(`Time: ${performance.now() - start}`);
// fetch("http://localhost:3000/users")
//   .then(data=>data.json())
//   .then((res) => console.log(res))
//   .catch();
// fetch("http://localhost:3000/users", {
//   method: "POST",
//   body: JSON.stringify({
//     name: "Nikita",
//   }),
// })
//   .then((data) => console.log(data))
//   .catch();