const cartWrapper = document.querySelector('.cart-wrapper');

window.addEventListener('click', (ev) => {
    if (ev.target.hasAttribute('data-cart')) {
        const card = ev.target.closest('.card');

        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
            itemsInBox: card.querySelector('[data-items-in-box] span').innerText,
            weight: card.querySelector('.price__weight span').innerText,
            price: card.querySelector('.price__currency span').innerText,
            counter: card.querySelector('[data-counter]').innerText,
        };

        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

        if (itemInCart) {
            const counterEl = itemInCart.querySelector('[data-counter]');
            if ((parseInt(counterEl.innerText) + parseInt(productInfo.counter)) <= 10) {
                counterEl.innerText = parseInt(counterEl.innerText) + parseInt(productInfo.counter);
                calcCartPriceAndDelivery();
            } else {
                alert('На 1 товар нельзя добавить более 10!');
            }
        } else {
            const cartItemHtml = `
        <!-- Cart item -->
\t\t\t\t\t\t\t<div class="cart-item" title="${productInfo.title}" data-id="${productInfo.id}">
\t\t\t\t\t\t\t\t<div class="cart-item__top">
\t\t\t\t\t\t\t\t\t<div class="cart-item__img">
\t\t\t\t\t\t\t\t\t\t<img src="${productInfo.imgSrc}" alt="${productInfo.title}">
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t<div class="cart-item__desc">
\t\t\t\t\t\t\t\t\t\t<div class="cart-item__title">${productInfo.title}</div>
\t\t\t\t\t\t\t\t\t\t<div class="cart-item__weight"><span>${productInfo.itemsInBox}</span> шт. / <span>${productInfo.weight}</span>г.</div>

\t\t\t\t\t\t\t\t\t\t<!-- cart-item__details -->
\t\t\t\t\t\t\t\t\t\t<div class="cart-item__details">

\t\t\t\t\t\t\t\t\t\t\t<div class="items items--small counter-wrapper">
\t\t\t\t\t\t\t\t\t\t\t\t<div class="items__control" data-action="minus">-</div>
\t\t\t\t\t\t\t\t\t\t\t\t<div class="items__current" data-counter="">${productInfo.counter}</div>
\t\t\t\t\t\t\t\t\t\t\t\t<div class="items__control" data-action="plus">+</div>
\t\t\t\t\t\t\t\t\t\t\t</div>

\t\t\t\t\t\t\t\t\t\t\t<div class="price">
\t\t\t\t\t\t\t\t\t\t\t\t<div class="price__currency"><span>${productInfo.price}</span> ₽</div>
\t\t\t\t\t\t\t\t\t\t\t</div>

\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t<!-- // cart-item__details -->

\t\t\t\t\t\t\t\t\t</div>
                  <button type="button" class="fs-4 d-flex align-items-center rounded-2 justify-content-center border-0 ms-auto my-auto me-2"><i class='bx bx-x del-item'></i></button>
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t<!-- // Cart item -->
        `
            cartWrapper.insertAdjacentHTML('afterbegin', cartItemHtml);
            toggleCartStatus();
            calcCartPriceAndDelivery();
        }
        card.querySelector('[data-counter]').innerText = '1'
    }
});