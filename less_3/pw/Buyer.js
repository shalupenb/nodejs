class Buyer {
  #_email;
  #_name;
  constructor(email,name) {
    this.#_email = email;
    this.#_name = name;
  }
  getEmail() {
    return this.#_email;
  }
  getName() {
    return this.#_name;
  }
  toString() {
    return `Name: ${this.#_name} Email: ${this.#_email}`;
  }
  notifyAboutSale(discount) {
    console.log(`Name: ${this.#_name} Email: ${this.#_email} your discount ${discount}%`);
  }
}
export {Buyer};