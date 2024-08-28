function calcCartPriceAndDelivery() {
    const cartItems = document.querySelectorAll('.cart-item'),
        totalPriceEl = document.querySelector('.total-price'),
        cartWrapper = document.querySelector('.cart-wrapper'),
        deliveryDescription = document.querySelector('.cart-total [data-cart-delivery-description]'),
        deliveryCost = document.querySelector('.delivery-cost'),
        activeTotalPrice = document.querySelector('.active-total-price');
    let totalPrice = 0;

    // Mahsulotlarni narxini hisoblash
    cartItems.forEach(function (item) {
        const amountEl = item.querySelector('[data-counter]'),
            priceEl = item.querySelector('.price__currency'),
            currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
        // Promokodni bor yoki yo'qligiga qarab hisoblash
        if (activePromo == null) {
            totalPrice += currentPrice;
        } else {
            totalPrice += currentPrice;
            activeTotalPrice.innerText = totalPrice - activePromo.price;
        }
    });
    // Jami 90.000 somdan oshsa dostafkani bepul qilish bolmasa pullik
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
    // Savat bosh bolsa jami summani 0 ga tenglash bolmasa oz holidek qolish
    if (cartWrapper.children.length === 0) {
        totalPrice = 0;
        totalPriceEl.innerText = totalPrice;
    } else {
        totalPriceEl.innerText = totalPrice;
    }
}