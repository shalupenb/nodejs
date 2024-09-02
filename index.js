/*
1) Common Js modules (exports->require)
2) ES modules (export-> import)
*/
const User = require("./User");
const user = new User("Alex", 22);
console.log(user.toString());
