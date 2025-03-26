function addToCart() {
    // Get the product information
    var product = {
      name: document.querySelector('.product-title').textContent,
      price: document.querySelector('.product-price').textContent,
      quantity: parseInt(document.querySelector('input[type="number"]').value),
      id: Date.now() // generate a unique ID for the product
    };
  
    // Retrieve cart data from local storage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    console.log('Cart before adding product:', cart);
  
    // Check if the product is already in the cart
    if (cart.hasOwnProperty(product.id)) {
      // If the product is already in the cart, update the quantity
      cart[product.id].quantity += product.quantity;
    } else {
      // If the product is not in the cart, add it
      cart[product.id] = product;
    }
  
    console.log('Cart after adding product:', cart);
  
    // Save the updated cart data to local storage
    localStorage.setItem('cart', JSON.stringify(cart));
  
    // Alert the user that the product has been added to the cart
    alert('Product added to cart!');
  }

function removeFromCart(id) {
    // Retrieve cart data from local storage
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Remove the item from the cart
    delete cart[id];
  
    // Save the updated cart data to local storage
    localStorage.setItem('cart', JSON.stringify(cart));
  
    // Reload the page to update the cart display
    location.reload();
  }