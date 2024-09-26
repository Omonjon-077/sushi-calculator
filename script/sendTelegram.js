/*=============== TELEGRAM BOT ===============*/
let form = document.querySelector(".needs-validation"),
    toast = document.querySelector(".toast");

// FOR SEND BOT
let bot = {
    TOKEN: "7244017061:AAEKlZM-uhpGl6PvLAvWgAJJEuU848CQ4HA",
    chatID: "-1002488322132", // Agar botning o'zigagina xabar jo'natilsa ID shunday qoladi agar guruhga bolsa boshiga tire "-" qo'yish kerak
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const fields = form.querySelectorAll('input[type="text"], textarea');

    // Domen nomlarini aniqlash uchun regular expression
    const urlPattern = /([a-zA-Z0-9-]+\.[a-zA-Z]{2,})/g;

    // Input yoki textarea ichida link borligini tekshirish uchun bayroq
    let foundLink = false;

    fields.forEach(input => {
        // Oldindan qo'yilgan error classini olib tashlaymiz
        input.classList.remove('error');

        // Agar inputda link yoki domen topilsa
        if (urlPattern.test(input.value)) {
            foundLink = true; // Link topilganini belgilaymiz
            input.classList.add('error'); // Xato bo'lgan elementni belgiliymiz
            alert(`Link yoki domen ${input.name} da topildi!`); // Foydalanuvchiga xabar
        }
    });

    fields.forEach(input => {
        input.addEventListener('input', function() {
            // Agar inputdagi matn to'g'ri bo'lsa, error classini olib tashlaymiz
            if (!urlPattern.test(input.value)) {
                input.classList.remove('error');
            }
        });
    });

    let userName = document.querySelector("#user-name"),
        userPhone = document.querySelector("#phone-num"),
        userLocation = document.querySelector("#user-location"),
        userMessage = document.querySelector("#user-massage");

    // 1. Cartdagi barcha itemlarni olish
    const cartItems = document.querySelectorAll('.cart-item');

    // 2. Ma'lumotlarni arrayga yig'ish
    const itemArray = Array.from(cartItems).map(item => {
        const itemName = item.querySelector('.cart-item__title').textContent;
        const itemQuantity = item.querySelector('.items__current').textContent;
        return `  ${itemName}, ${itemQuantity} ta`; // Tartibli format
    });

    // 3. Arrayni bitta qatorda matn sifatida chiqarish
    const resultText = itemArray.join('%0A'); // itemlarni "%0A (Enter)" bilan ajratamiz

    // Umumiy summani olish
    const totalPriceItem = document.querySelector('.total-price'),
        promoTotalPriceItem = document.querySelector('.active-total');

    let totalPrice;
    if (promoTotalPriceItem.classList.contains('d-none')) {
        totalPrice = totalPriceItem.textContent;
    } else {
        totalPrice = promoTotalPriceItem.querySelector('.active-total-price').textContent;
    }

    let sendMessage = `
    Mijoz %0A 👤 Ismi: ${userName.value} %0A 📞 Telefon raqami: ${userPhone.value} %0A 📍 Manzili: ${userLocation.value} %0A 💬 Xabari: ${userMessage.value} 
    %0A %0ATovarlar: %0A${resultText} %0A %0A💵 Umumiy narx: ${totalPrice} so'm
    `

    if (foundLink) {
        e.preventDefault(); // Form yuborilishini to'xtatadi
    } else if (userPhone.value.length <= 16) {
        alert("Telefon raqamingizni to'liq kiriting ☎");
    } else {
        fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${sendMessage}`, {
            method: "GET"
        })
            .then(success => {
                userName.value = "";
                userPhone.value = "";
                userLocation.value = "";
                userMessage.value = "";
                toast.classList.add("show");
                cartItems.forEach(function (item) {
                    item.remove();
                });
                toggleCartStatus();
                calcCartPriceAndDelivery();
                document.querySelector('.form-check-input').checked = false;
                setTimeout(function () {
                    toast.classList.remove("show");
                }, 5000);
            }, error => {
                alert("Xabaringiz jo'natilmadi, iltimos keyinroq urunib ko'ring!");
                userName = "";
                userPhone = "";
                userLocation = "";
                userMessage = "";
                cartItems.forEach(function (item) {
                    item.remove();
                });
                toggleCartStatus();
                calcCartPriceAndDelivery();
            })
    }
})