import products from './products.js';

const initProducts = () => {
    let listProductHtml = document.querySelector('.productView');

    products.forEach(product => {
        let newProduct = document.createElement('div');
        newProduct.classList.add('col-md-6');
        newProduct.innerHTML = `
<!-- Ролл -->
<div class="card p-3 h-100" title="${product.title}" data-id="${product.id}">
<img class="product-img h-100 mx-auto" src="${product.img}" alt="${product.title}">
<div class="card-body text-center p-0">
<h4 class="item-title">${product.title}</h4>
<p><small data-items-in-box class="text-muted"><span>${product.pieces}</span> dona.</small></p>

<div class="details-wrapper px-xl-4 px-lg-1 px-md-3 px-sm-2 px-1">
<div class="items counter-wrapper">
<div class="items__control" data-action="minus">-</div>
<div class="items__current" data-counter>1</div>
<div class="items__control" data-action="plus">+</div>
</div>

<div class="price">
<div class="price__weight"><span>${product.weight}</span>g.</div>
<div class="price__currency"><span>${product.price}</span> so'm</div>
</div>
</div>

<button data-cart type="button" class="btn btn-block btn-outline-warning w-100">+ savatga</button>

</div>
</div>
<!-- // Ролл -->
`;
        listProductHtml.appendChild(newProduct);
    });
};

initProducts();