// Scriptlarni dinamik yuklash uchun funksiya, type bo'yicha sozlash imkoniyati bilan
function loadScript(src, isModule = false) {
    return new Promise(function (resolve, reject) {
        const script = document.createElement('script');
        script.src = src;
        if (isModule) {
            script.type = 'module'; // Agar fayl module bo'lsa
        }
        script.onload = () => resolve(src + ' yuklandi');
        script.onerror = () => reject(new Error(src + ' yuklab bo\'lmadi'));
        document.head.append(script);
    });
}

// Yuklanishi kerak bo'lgan scriptlar ro'yxati
const scripts = [
    {src: 'libs/jquery/jquery.min.js', isModule: false},
    {src: 'https://unpkg.com/imask', isModule: false},
    {src: 'libs/lottie-player.js', isModule: false},
    {src: 'script/products.js', isModule: true}, // Bu module
    {src: 'script/productGenerate.js', isModule: true}, // Bu ham module
    {src: 'script/calcCartPriceAndDelivery.js', isModule: false},
    {src: 'script/toggleCartStatus.js', isModule: false},
    {src: 'script/counter.js', isModule: false},
    {src: 'script/cart.js', isModule: false},
    {src: 'script/quiz.js', isModule: false},
    {src: 'script/promo.js', isModule: false},
    {src: 'script/sendTelegram.js', isModule: false},
    {src: 'libs/bootstrap/js/bootstrap.bundle.min.js', isModule: false},
    {src: 'script/main.js', isModule: false}
];

// Barcha scriptlarni birin-ketin yuklash
scripts.reduce((promise, script) => {
    return promise.then(() => loadScript(script.src, script.isModule));
}, Promise.resolve())
    .then(() => console.log('Barcha scriptlar yuklandi'))
    .catch(err => console.error('Xatolik yuz berdi: ', err));
