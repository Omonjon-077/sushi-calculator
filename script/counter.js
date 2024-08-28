window.addEventListener('click', (ev) => {
    if (ev.target.dataset.action === 'plus') {
        let counterWrapper = ev.target.closest('.counter-wrapper');
        let counter = counterWrapper.querySelector('[data-counter]');
        if (counter.innerText < 10) {
            counter.innerText = ++counter.innerText;
        }
    }

    // Проверяем является ли элемент по которому был совершен клик кнопкой Минус
    if (ev.target.dataset.action === 'minus') {
        let counterWrapper = ev.target.closest('.counter-wrapper');
        let counter = counterWrapper.querySelector('[data-counter]');

        // Проверяем чтобы счетчик был больше 1
        if (parseInt(counter.innerText) > 1) {
            // Изменяем текст в счетчике уменьшая его на 1
            counter.innerText = --counter.innerText;

            // Проверка на товар который находится в корзине
        } else if (ev.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
            // удаляем товар из корзины
            ev.target.closest('.cart-item').remove();
            toggleCartStatus();
            calcCartPriceAndDelivery();
        }
    }


    if (ev.target.hasAttribute('data-action') && ev.target.closest('.cart-wrapper')) {
        calcCartPriceAndDelivery();
    }
    // O'chirish btn bosganda osha mahsulotni olib tashlash va jami narxdan minus qlish
    if (ev.target.classList.contains('del-item')) {
        ev.target.closest('.cart-item').remove();
        toggleCartStatus();
        calcCartPriceAndDelivery();
    }
});