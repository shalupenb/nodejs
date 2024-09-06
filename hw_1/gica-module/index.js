export default class Player {
  #_name;
  #_level;
  constructor(name,level) {
    this.#_name = name;
    this.#_level = level;
  }
  getName() {
    return this.#_name;
  }
  getLevel() {
    return this.#_level;
  }
  toString() {
    return `Name: ${this.#_name} Level: ${this.#_level}`;
  }
}