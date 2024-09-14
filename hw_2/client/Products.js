export default class Products {
  #_link = "http://localhost:3000/products";
  #_name;
  #_price;
  constructor(name,price) {
    this.#_name = name;
    this.#_price = price;
  }
  get() {
    fetch(this.#_link, {
      method: "GET",
    })
      .then(data=>data.json())
      .then((res) => console.table(res))
      .catch();
  }
  post(productData) {
    const { name, price } = productData;
    
    if (!name || !price) {
      console.error('Name and price are required');
      return;
    }

    fetch(this.#_link, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, price }),  // Send only required fields: name, price
    })
      .then((data) => data.json())
      .then((res) => console.log("Product created:", res))
      .catch();
  }
  
  put(productId, updatedData) {
    const { name, price } = updatedData;

    if (!name || !price) {
      console.error('Name and price are required');
      return;
    }

    fetch(`${this.#_link}/${productId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, price }),
    })
      .then((data) => data.json())
      .then((res) => console.log("Product updated:", res))
      .catch();
  }

  delete(productId) {
    fetch(`${this.#_link}/${productId}`, {
      method: "DELETE",
    })
      .then((data) => data.json())
      .then((res) => console.log("Product deleted:", res))
      .catch();
  }
}