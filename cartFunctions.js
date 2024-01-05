let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productName, price)
{
    cartItems.push({name: productName, price: price});
    updateCart();
}

function updateCart()
{
    const cartContainer = document.getElementById("cart-items");
    const totalSpan = document.getElementById("total");

    console.log(cartContainer); // Check if cartContainer is not null
    console.log(totalSpan); // Check if totalSpan is not null

    cartContainer.innerHTML = "hello";

    let total = 0;

    cartItems.forEach(item =>
    {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `<p> ${item.name} - €${item.price} </p>`;
        cartContainer.appendChild(cartItem);
        total += item.price;
    });

    totalSpan.textContent = `€${total}`;

    localStorage.setItem('cart', JSON.stringify(cartItems));
}






    