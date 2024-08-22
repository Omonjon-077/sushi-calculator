IMask(
    document.getElementById('phone-num'),
    {
        mask: '+{998}(00)000-00-00'
    }
);

// Function for phone number field
function validateForm() {
    let x = document.querySelector('#phone-num').value;
    if (x == +998 || x.length <= 16) {
        alert("Введите полный номер телефона");
        return false;
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