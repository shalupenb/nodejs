import {Buyer} from "./Buyer.js";
import EventEmitter from "node:events";

const emitter = new EventEmitter();
const buyers = [
  new Buyer("user1@example.com", "kent1"),
  new Buyer("user2@example.com", "kent2"),
  new Buyer("user3@example.com", "kent3"),
  new Buyer("user4@example.com", "kent4"),
  new Buyer("user5@example.com", "kent5"),
];

buyers.forEach(buyer => {
  emitter.on("sale", (data) =>{
    console.log(buyer.toString(), `Discount: ${data.discount}`);
  });
});

emitter.emit("sale", {discount: "50%"});
