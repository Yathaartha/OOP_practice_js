class Product {
  title = "DEFAULT";
  imageUrl;
  description;
  price;
}

console.log(new Product());

const productList = {
  products: [
    // new Product(),
    {
      title: "A Pillow",
      imageUrl:
        "https://i1.adis.ws/i/dreams/719-00201_main-shot_01_therapur-cool-pillow",
      price: 19.99,
      description: "A soft pillow!",
    },
    {
      title: "A Carpet",
      imageUrl:
        "https://rukminim1.flixcart.com/image/612/612/k30h8y80/carpet-rug/y/u/v/candy-75-blue-the-world-trendz-original-imafhjkpz23cwf42.jpeg?q=70",
      price: 89.99,
      description: "A carpet which you might like - or not.",
    },
  ],
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
  },
};

productList.render();
