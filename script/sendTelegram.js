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

    let userName = document.getElementById("user-name"),
        userPhone = document.getElementById("phone-num"),
        userLocation = document.getElementById("user-location"),
        userMessage = document.getElementById("user-massage");

    let sendMessage = `Mijoz %0A Ismi: ${userName.value} %0A Telefon raqami: ${userPhone.value} %0A Manzili: ${userLocation.value} %0A Xabari: ${userMessage.value} %0A %0A`

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