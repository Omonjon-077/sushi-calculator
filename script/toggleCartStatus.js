function toggleCartStatus() {
    const cartWrapper = document.querySelector('.cart-wrapper'),
        cartEmptyBadge = document.querySelector('[data-cart-empty]'),
        delivery = document.querySelector('.cart-total [data-cart-delivery]'),
        cartOrder = document.querySelector('#order-form');

    // Savatda narsa bor yoki yoqligini tekshirish
    if (cartWrapper.children.length > 0) {
        delivery.classList.remove('d-none');
        cartEmptyBadge.classList.add('d-none');
        cartOrder.classList.remove('d-none');
    } else {
        delivery.classList.add('d-none');
        cartEmptyBadge.classList.remove('d-none');
        document.querySelector('.active-total').classList.add('d-none');
        document.querySelector('.cart-total .text-danger').classList.remove('text-line-through');
        cartOrder.classList.add('d-none');
    }
}