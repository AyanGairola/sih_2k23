const apiUrl = 'https://raw.githubusercontent.com/akshit7093/project_data/main/db.json';

async function fetchProductData() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }

    const data = await response.json();
    const productContainer = document.getElementById('product-container');

    for (const item in data) {
      if (data.hasOwnProperty(item)) {
        const product = data[item];
        const productItem = document.createElement('div');
        productItem.classList.add('buy-item');

        productItem.innerHTML = `
          <div class="buy-item-upper">
            <div class="buy-item-upper-upper">
              <div class="buy-item-image">
                <img src="${product.thumbnail}" alt="" height="180px" />
              </div>
              <div class="heart"></div>
            </div>
          </div>
          <div class="buy-item-description">
            <div class="name-plus">
              <div class="buy-item-name"><b>Product name -</b> ${product.name}</div>
              <div class="plus">+</div>
            </div>
            <div class="quantity"><b>Quantity</b> ${product.quantity}</div>
            <div class="warranty"><b>Warranty -</b> ${product.warranty}</div>
            <div class="button-price">
              <div class="buy-item-price"><b>Price</b> ${product.price}</div>
              <button class="add-to-cart">ADD TO CART</button>
            </div>
          </div>
        `;

        productContainer.appendChild(productItem);
      }
    }
  } catch (error) {
    console.error('Error fetching data: ', error);
  }
}

fetchProductData();
