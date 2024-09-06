export default class Products {
  #_link = "http://localhost:3000/products";
  get() {

  }
  post() {

  }
  put() {

  }
  delete() {

  }
  toString() {
    fetch(this.#_link)
      .then(data=>data.json())
      .then((res) => console.table(res))
      .catch();
  }
}