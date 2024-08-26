if ($('#phone-num').length) {
    IMask(
        document.getElementById('phone-num'),
        {
            mask: '+{998}(00)000-00-00'
        }
    );
}

// script for validate form
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

// Function for phone number field
if ($('#phone-num').length) {
    function validateForm() {
        let x = document.querySelector('#phone-num').value;
        if (x.length <= 16) {
            alert("Telefon raqamingizni to'liq kiriting!");
            return false;
        }
    }
}

// Function for promo check
if ($('#promocode').length) {
    let promoInput = document.querySelector('#promocode');
    function checkPromo() {
        if (promoInput.value == '') {
            alert(`Iltimos promokodni kiriting!`)
        } else if (promoInput.value == activePromo.name) {
            let totalPriceEl = document.querySelector('.total-price'),
                activeTotalPrice = document.querySelector('.active-total-price');
            document.querySelector('.active-total').classList.remove('d-none');
            document.querySelector('.cart-total .text-danger').classList.add('text-line-through');
            totalPriceEl.classList.add('text-line-through');
            let totalPrice = totalPriceEl.innerText;
            totalPrice -= activePromo.price;
            activeTotalPrice.innerText = totalPrice;
        } else {
            alert(`Siz bunday promokod yutib olmagansiz yoki nato'g'ri kiritgansiz!`)
        }
    }
}


// Function for toasts when click btn
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger.addEventListener('click', () => {
        toastBootstrap.show()
    })
}