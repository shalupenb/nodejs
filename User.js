// //@ts-check
// /**
//  * @param {number} a
//  * @param {number} b
//  * @returns
//  */
// function sum(a,b) {
//   return a+b;
// }
// console.log(sum(1,2));
class User {
  #_name; //# = private
  #_age;
  constructor(name,age) {
    this.#_name = name;
    this.#_age = age;
  }
  getName() {
    return this.#_name;
  }
  getAge() {
    return this.#_age;
  }
  toString() {
    return `Name: ${this.#_name} Age: ${this.#_age}`;
  }
}

module.exports = User;