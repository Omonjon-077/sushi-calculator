/*=============== TELEGRAM BOT ===============*/
let form = document.querySelector(".needs-validation"),
    toast = document.querySelector(".toast");

// FOR SEND BOT
let bot = {
    TOKEN: "7244017061:AAEKlZM-uhpGl6PvLAvWgAJJEuU848CQ4HA",
    chatID: "-4536220519",
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

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

    if (userPhone.value.length <= 16) {
        alert("Telefon raqamingizni to'liq kiriting ☎");
    } else if (userName.value === "" || userLocation.value === "") {
        alert("Ma'lumotlar to'liq kiritilmagan!");
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
                setTimeout(function () {
                    toast.classList.remove("show");
                }, 5000);
            }, error => {
                alert("Xabaringiz jo'natilmadi, iltimos keyinroq urunib ko'ring!");
                userName = "";
                userPhone = "";
                userLocation = "";
                userMessage = "";
            })
    }
})