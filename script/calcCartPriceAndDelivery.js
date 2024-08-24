function calcCartPriceAndDelivery() {
    const cartItems = document.querySelectorAll('.cart-item'),
        totalPriceEl = document.querySelector('.total-price'),
        cartWrapper = document.querySelector('.cart-wrapper'),
        deliveryDescription = document.querySelector('.cart-total [data-cart-delivery-description]'),
        deliveryCost = document.querySelector('.delivery-cost');
    let totalPrice = 0;

    cartItems.forEach(function (item) {
        const amountEl = item.querySelector('[data-counter]'),
            priceEl = item.querySelector('.price__currency'),
            currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
        totalPrice += currentPrice;
    });
    if (totalPrice >= 90000) {
        deliveryDescription.classList.add('d-none');
        deliveryCost.classList.add('free');
        deliveryCost.innerText = 'Bepul';
    } else {
        deliveryCost.classList.remove('free');
        deliveryDescription.classList.remove('d-none');
        deliveryCost.innerText = '25000 so\'m';
        totalPrice += parseInt(deliveryCost.innerText);
    }
    if (cartWrapper.children.length === 0) {
        totalPrice = 0;
        totalPriceEl.innerText = totalPrice;
    } else {
        totalPriceEl.innerText = totalPrice;
    }
}