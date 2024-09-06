/*
1) Common Js modules (exports->require)
2) ES modules (export-> import)
*/
//const User = require("./User");
import User from "./User.js";
import Player from "gica-its-module";
import chalk from "chalk";
const user = new User("Alex", 22);
const player = new Player("shalupenb", 100);
console.log(chalk.red(player.toString()));
console.log(chalk.green(user.toString()));
