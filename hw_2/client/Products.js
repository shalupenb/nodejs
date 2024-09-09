export default class Products {
  #_link = "http://localhost:3000/products";
  get() {
    fetch(this.#_link, {
      method: "GET",
    })
      .then(data=>data.json())
      .then((res) => console.table(res))
      .catch();
  }
  post() {

  }
  put() {

  }
  delete() {

  }
}