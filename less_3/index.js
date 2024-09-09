//console.log(process.argv);
// import {User} from "./User.js";
// const user = new User;
// user.show();

import EventEmitter from "node:events";

const emitter = new EventEmitter();
const listener1 = () => {
  console.log("listener 1 +"); //подписчик
};
const listener2 = () => {
  console.log("listener 2 +"); //подписчик
};
emitter.on("connection", listener1);
emitter.addListener("connection", () => {
  console.log("listener 2 +");
});
emitter.once("connection", () => {
  console.log("временный+");
});
emitter.emit("connection");
console.log("===========");
emitter.removeListener("connection", listener1);
emitter.emit("connection");