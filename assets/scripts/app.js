class Product {
  // title = "DEFAULT";
  // imageUrl;
  // description;
  // price;

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ProductList {
  products = [
    new Product(
      "A Pillow",
      "https://i1.adis.ws/i/dreams/719-00201_main-shot_01_therapur-cool-pillow",
      "A soft pillow!",
      19.99
    ),
    new Product(
      "A Carpet",
      "https://rukminim1.flixcart.com/image/612/612/k30h8y80/carpet-rug/y/u/v/candy-75-blue-the-world-trendz-original-imafhjkpz23cwf42.jpeg?q=70",
      "A carpet which you might like - or not.",
      89.99
    ),
  ];

  constructor() {}

  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const prodEl = document.createElement("li");
      prodEl.className = "product-item";
      prodEl.innerHTML = `
        <div>
          <img src="${prod.imageUrl}" alt="${prod.title}">
          <div class = "product-item__content">
            <h2>${prod.title}</h2>
            <h3>${prod.price}</h3>
            <p>${prod.description}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
}

const productList = new ProductList();
productList.render();
