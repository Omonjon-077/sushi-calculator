// Loader
document.addEventListener('DOMContentLoaded', function (eventObject) {
    $('.load').fadeIn();
})
window.addEventListener("load", function (eventObject) {
    $('.load').fadeOut("slow");

});

// Tel nomerga mask qoyish
if ($('#phone-num').length) {
    IMask(document.getElementById('phone-num'), {
        mask: '+{998}(00)000-00-00'
    });
}

// Validatsiyani tekshirish bootstrap
if ($('.needs-validation').length) {
    (() => {
        'use strict'

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
    })()
}

// Promokod bor yoki yoqligini tekshirish
if ($('#promocode').length) {
    let promoInput = document.querySelector('#promocode'), addPromoCode = document.querySelector('.add-promo'),
        removePromoCode = document.querySelector('.remove-promo');

    addPromoCode.addEventListener('click', () => {
        if (promoInput.value == '') {
            alert(`Iltimos promokodni kiriting 👀`)
        } else if (activePromo == null) {
            alert(`Siz bunday promokod yutib olmagansiz 😑`)
        } else if (promoInput.value == activePromo.name) {
            let totalPriceEl = document.querySelector('.total-price'),
                activeTotalPrice = document.querySelector('.active-total-price');
            document.querySelector('.active-total').classList.remove('d-none');
            document.querySelector('.cart-total .text-danger').classList.add('text-line-through');
            addPromoCode.classList.add('d-none');
            removePromoCode.classList.remove('d-none');
            let totalPrice = totalPriceEl.innerText;
            totalPrice -= activePromo.price;
            activeTotalPrice.innerText = totalPrice;
        } else {
            alert(`Siz promokodni nato'g'ri kiritmoqdasiz 🤦‍♂️`)
        }
    });
    // Promokodni olib tashlash
    removePromoCode.addEventListener('click', () => {
        promoInput.value = '';
        removePromoCode.classList.add('d-none');
        addPromoCode.classList.remove('d-none');
        document.querySelector('.cart-total .text-danger').classList.remove('text-line-through');
        document.querySelector('.active-total').classList.add('d-none');
    });
}

// Sahifadagi no-copy classga ega elementlarda copy hodisasini o'chirib qo'yamiz
document.addEventListener('copy', function(event) {
    const selection = window.getSelection().toString();
    const noCopyElements = document.querySelectorAll('.no-copy');

    noCopyElements.forEach(element => {
        if (element.contains(window.getSelection().anchorNode)) {
            event.preventDefault(); // Copy qilishni bloklaydi
            alert('Matnni nusxa ko\'chirish taqiqlangan!');
        }
    });
});

// Function for toasts when click btn
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger.addEventListener('click', () => {
        toastBootstrap.show()
    })
}